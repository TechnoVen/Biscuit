json.extract!(
  @user,
  :id,
  :first_name,
  :last_name,
  :pet_type,
  :city_id,
  :email,
  :image_url,
)

json.profile do
  json.profile_1 @user.profile_1
  json.profile_2 @user.profile_2
  json.profile_3 @user.profile_3
end

current_events = @user.attended_events + @user.hosted_events
past_events = []

json.current_events do
  current_events.each do |event|
    if event.is_past?
      past_events.push(event)
      next
    end
    json.set! event.id do
      json.partial! 'api/events/event', event: event, user: @user
      json.archived false
    end
  end
end


json.past_events do
  past_events.each do |event|
    json.set! event.id do
      json.partial! 'api/events/event', event: event, user: @user
      json.archived true
    end
  end
end
