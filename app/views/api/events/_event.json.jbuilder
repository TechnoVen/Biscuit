json.extract! event, :id, :date, :time, :description, :city_id, :location
json.host event.host, :id, :first_name, :last_name, :image_url
unless event.host_id == user.id
  json.set! :attend_id, user.attendances.where(event_id: event.id).first.id
end
