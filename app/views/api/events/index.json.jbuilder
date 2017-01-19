json.current do
  json.array! @current_events, partial: 'api/events/event', as: :event
end

json.past do
  json.array! @past_events, partial: 'api/events/event', as: :event
end
