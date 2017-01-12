class Host < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user
  has_many :events
end
