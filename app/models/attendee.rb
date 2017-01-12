# == Schema Information
#
# Table name: attendees
#
#  id       :integer          not null, primary key
#  user_id  :integer          not null
#  event_id :integer          not null
#

class Attendee < ApplicationRecord
  validates :user_id, :event_id, presence: true

  belongs_to :user
  belongs_to :event
end
