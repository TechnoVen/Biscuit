class CreateAttendee < ActiveRecord::Migration[5.0]
  def change
    create_table :attendees do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
    end

    add_index :attendees, :user_id
    add_index :attendees, :event_id
  end
end
