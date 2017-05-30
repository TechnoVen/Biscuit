class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :likee_id, null: false
      
      t.timestamps
    end
  end
end