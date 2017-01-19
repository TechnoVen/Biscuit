# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  date        :string           not null
#  description :string
#  host_id     :integer          not null
#  city_id     :integer          not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  time        :string           not null
#

class Event < ApplicationRecord
  validates(
    :date,
    :host_id,
    :city_id,
    presence: true
  )

  def self.find_current_user_events(user_id)
    reject_if_past!(self.find_all_user_events(user_id))
  end

  def self.find_past_user_events(user_id)
    select_if_past!(self.find_all_user_events(user_id))
  end


  def self.find_all_user_events(user_id)
    events = Event
      .joins('LEFT OUTER JOIN attendances ON attendances.event_id = events.id')
      .where([
        'events.host_id = ? OR attendances.user_id = ?',
        "#{user_id}",
        "#{user_id}"
      ]).distinct

    self.sort_by_date!(events)
  end

  def self.select_if_past!(events)
    current_time = Time.new
    events.select do |a|
      a_time = a.time.insert(2, ":")
      a_date_time = (a.date + " " + a_time).to_time.next_day.change(hour: 0)

      current_time >= a_date_time
    end
  end

  def self.reject_if_past!(events)
    current_time = Time.new
    events.reject do |a|
      a_time = a.time.insert(2, ":")
      a_date_time = (a.date + " " + a_time).to_time.next_day.change(hour: 0)

      current_time >= a_date_time
    end
  end

  def self.sort_by_date!(events)
    events.sort do |a, b|
      a.date.to_time <=> b.date.to_time
    end
  end

  belongs_to :host
  belongs_to :city
  has_many :attendances
  has_many :attendees, through: :attendance
end
