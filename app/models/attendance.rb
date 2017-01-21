# == Schema Information
#
# Table name: attendances
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Attendance < ApplicationRecord
  validates :user_id, :event_id, presence: true

  belongs_to :attendee, foreign_key: :user_id, class_name: :User
  belongs_to :attended_event, foreign_key: :event_id, class_name: :Event
end
