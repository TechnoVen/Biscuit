class RemoveExtraneousUserCol < ActiveRecord::Migration[5.0]
  def change
    remove_columns :users, :first_name, :last_name, :pet_type
  end
end
