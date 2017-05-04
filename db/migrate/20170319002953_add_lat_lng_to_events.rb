class AddLatLngToEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :geolocation, :string
    add_column :events, :lat, :string
    add_column :events, :lng, :string
  end
end
