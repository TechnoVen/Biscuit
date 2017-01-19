json.set! @city.id do
  json.extract! @city, :id, :name, :image_url
  json.events(
    @city.events
          .sort { |i, j| i.date.to_time <=> j.date.to_time },
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
end
