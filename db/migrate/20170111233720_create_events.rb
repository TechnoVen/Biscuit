class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :date, null: false
      t.string :time, null: false
      t.integer :max_guests, null: false
      t.string :description
      t.integer :host_id, null: false
      t.integer :city_id, null: false
      t.boolean :archived, default: false
    end

    add_index :events, :host_id
    add_index :events, :city_id
  end
end
