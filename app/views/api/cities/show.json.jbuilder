json.extract! @city, :id, :name, :image_url
json.events(
  @city_events,
  :id,
  :city_id,
  :date,
  :description,
  :host_id,
  :archived,
  :location,
  :time
)
json.hosts @city.hosts.uniq, :id, :user_id, :detail1, :detail2, :detail3
