class CreateAttendance < ActiveRecord::Migration[5.0]
  def change
    create_table :attendance do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
    end

    add_index :attendance, :user_id
    add_index :attendance, :event_id
  end
end
