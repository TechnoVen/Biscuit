json.extract!(
  user,
  :id,
  :city_id,
  :first_name,
  :last_name,
  :email,
  :image_url,
)

events = user.attended_events + user.hosted_events

json.events do
  events.each do |event|
    json.set! event.id do
      json.partial! 'api/events/event.json.jbuilder', event: event
    end
  end
end
