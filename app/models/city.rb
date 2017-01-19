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

  def find_all_events_not_joined_by(user_id)
    events = Event
      .joins('LEFT OUTER JOIN attendances ON attendances.event_id = events.id')
      .where(['events.host_id != ?', "#{user_id}"])
      .where([
        'attendances.user_id IS NULL OR attendances.user_id != ?', "#{user_id}"
      ])

    Event.sort_by_date!(events)
  end

  def find_current_events_not_joined_by(user_id)
    Event.reject_if_past!(find_all_events_not_joined_by(user_id))
  end

  def find_current_events
    Event.sort_by_date!(Event.reject_if_past!(events))
  end

end
