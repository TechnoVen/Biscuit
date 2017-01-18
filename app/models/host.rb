# == Schema Information
#
# Table name: hosts
#
#  id         :integer          not null, primary key
#  detail1    :text
#  detail2    :text
#  detail3    :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Host < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user
  has_many :hosted_events, foreign_key: :host_id, class_name: :Event
end
