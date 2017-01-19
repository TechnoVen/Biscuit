# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  nickname        :string
#  first_name      :string           not null
#  last_name       :string
#  pet_type        :string
#  city_id         :integer
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates(
    :email,
    :password_digest,
    :session_token,
    :first_name,
    presence: true
  )
  validates :email, uniqueness: :true
  validates :password, length: { minimum: 8, allow_nil: true }

  has_many :attendances, foreign_key: :user_id, class_name: :Attendance
  has_one :host
  has_many :attended_events, through: :attendances
  has_many :hosted_events, through: :host

  attr_reader :password

  after_initialize :ensure_session_token
  after_create :create_matching_host

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

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def create_matching_host
    Host.create!(user_id: self.id)
  end
end
