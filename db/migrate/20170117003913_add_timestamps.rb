class AddTimestamps < ActiveRecord::Migration[5.0]
  def change
    add_timestamps :attendances
    add_timestamps :events
    add_timestamps :hosts
  end
end
