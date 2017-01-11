# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  day         :integer          not null
#  month       :integer          not null
#  year        :integer          not null
#  hour        :integer          not null
#  minutes     :integer          not null
#  period      :integer          not null
#  max_guests  :integer          not null
#  description :string
#  host_id     :integer          not null
#  city_id     :integer          not null
#  archived    :boolean          default("false")
#

class Event < ApplicationRecord
  validates(
    :day,
    :month,
    :year,
    :hour,
    :minutes,
    :period,
    :max_guests,
    :description,
    :host_id,
    :city_id,
    presence: true
  )
end
