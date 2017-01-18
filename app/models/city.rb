# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord
  validates :name, :image_url, presence: true

  has_many :events
  has_many :hosts, through: :events, source: :host
end
