json.partial! 'api/users/user', user: @user

events = @user.attended_events + @user.hosted_events

json.events do
  events.each do |event|
    json.set! event.id do
      json.partial! 'api/events/event', event: event
    end
  end
end

# json.hosted_events do
#   @user.hosted_events.each do |event|
#     json.set! event.id do
#       json.partial! 'api/events/event', event: event
#     end
#   end
# end
#
# json.attended_events do
#   @user.attended_events.each do |event|
#     json.set! event.id do
#       json.partial! 'api/events/event', event: event
#     end
#   end
# end
