# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  city_id         :integer
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  image_url       :string
#  first_name      :string
#  last_name       :string
#

class User < ActiveRecord::Base
  acts_as_mappable

  validates(
    :email,
    :password_digest,
    :session_token,
    presence: true
  )
  validates :email, uniqueness: :true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :attendances, foreign_key: :user_id, class_name: :Attendance
  has_many :attended_events, through: :attendances, source: :attended_event
  has_many :hosted_events, foreign_key: :host_id, class_name: :Event

  has_many :likes, foreign_key: :likee_id, class_name: Like
  has_many :liked, foreign_key: :liker_id, class_name: Like

  has_many :likes_me, through: :likes, source: :Likee
  has_many :likes_them, through: :liked, source: :Liker

  attr_reader :password

  after_initialize :ensure_session_token
  before_save :ensure_downcase_breed

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def matches
    likes_me + likes_them
  end

  def find_nearby(match_params)
    default = { distance: 25, breed: "" }
    match_params = default.merge!(match_params.to_h)

    User.within(match_params[:distance], origin: [self.lat, self.lng])
      .where('users.id != :user_id', user_id: self.id)
      .where("users.breed LIKE :breed", breed: "%#{match_params[:breed]}%")
  end

  def add_geocode_by_zipcode(zip_code)
    gc = Geokit::Geocoders::GoogleGeocoder.geocode zip_code
    self.lat, self.lng = gc.lat, gc.lng
    self.save!
  end

  private

  def ensure_downcase_breed
    self.breed == self.breed.downcase ? nil : self.breed.downcase!
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
