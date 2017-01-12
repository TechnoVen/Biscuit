class CreateHosts < ActiveRecord::Migration[5.0]
  def change
    create_table :hosts do |t|
      t.text :desc_1
      t.text :desc_2 
      t.text :desc_3
      t.integer :user_id, null: false
    end

    add_index :hosts, :user_id, unique: true
  end
end
