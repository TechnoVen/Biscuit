class City < ApplicationRecord
  validates :name, :image_url, presence: true

  has_many :events
  has_many :hosts, through: :events, source: :host
end
