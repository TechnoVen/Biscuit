# == Schema Information
#
# Table name: hosts
#
#  id      :integer          not null, primary key
#  desc_1  :text
#  desc_2  :text
#  desc_3  :text
#  user_id :integer          not null
#

class Host < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user
  has_many :events
end
