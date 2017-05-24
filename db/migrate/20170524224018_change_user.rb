class ChangeUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :pet_name, :string, null: false
    add_column :users, :breed, :string, null: false
  end
end
