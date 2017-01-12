# == Schema Information
#
# Table name: attendees
#
#  id       :integer          not null, primary key
#  user_id  :integer          not null
#  event_id :integer          not null
#

class Attendance < ApplicationRecord
  validates :user_id, :event_id, presence: true

  belongs_to :attendee, foreign_key: :user_id, class_name: :User
  belongs_to :attended_events, foreign_key: :event_id, class_name: :Event
end
