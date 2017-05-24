class Like < ApplicationRecord
  validates :liker_id, :likee_id, presence: true

  belongs_to :Likee, foreign_key: :likee_id, class_name: User
  belongs_to :Liker, foreign_key: :liker_id, class_name: User
end
