class ChangeAttendanceToAttendances < ActiveRecord::Migration[5.0]
  def change
    rename_table :attendance, :attendances
  end
end
