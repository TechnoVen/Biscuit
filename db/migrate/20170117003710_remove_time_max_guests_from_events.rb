class RemoveTimeMaxGuestsFromEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :time, :string
    remove_column :events, :max_guests, :integer
  end
end
