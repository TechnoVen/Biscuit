class AddTimeToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :time, :string, null: false
  end
end
