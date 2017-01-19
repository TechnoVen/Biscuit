# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  date        :string           not null
#  description :string
#  host_id     :integer          not null
#  city_id     :integer          not null
#  archived    :boolean          default("false")
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

  belongs_to :host
  belongs_to :city
  has_many :attendances
  has_many :attendees, through: :attendance
end
