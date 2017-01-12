# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  date        :string           not null
#  time        :string           not null
#  max_guests  :integer          not null
#  description :string
#  host_id     :integer          not null
#  city_id     :integer          not null
#  archived    :boolean          default("false")
#

class Event < ApplicationRecord
  validates(
    :date,
    :time,
    :max_guests,
    :host_id,
    :city_id,
    presence: true
  )

  belongs_to :host
  belongs_to :city
  has_many :attendees
  has_many :users, through: :attendees
end