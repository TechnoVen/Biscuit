class AddGeolocationToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :geolocation, :string, null: false
  end
end
