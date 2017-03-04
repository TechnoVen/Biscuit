json.partial! 'api/cities/city', city: @city

json.events do
  @city.events.each do |event|
    json.set! event.id do
      json.partial! 'api/events/event', event: event
    end
  end
end
