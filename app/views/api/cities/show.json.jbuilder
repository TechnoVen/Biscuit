json.extract! @city, :id, :name, :image_url

json.events @city_events do |event|
  json.extract! event, :id, :city_id, :date, :description, :host_id, :location, :time
  json.host_image event.host.user.image_url
end
