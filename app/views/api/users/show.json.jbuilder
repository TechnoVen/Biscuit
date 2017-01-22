json.extract!(
@user,
:id,
:first_name,
:last_name,
:pet_type,
:city_id,
:email,
:image_url,
:profile_1,
:profile_2,
:profile_3,
)

date_time = Proc.new { |a, b| a.date.to_time <=> b.date.to_time }

current_events = (@user.attended_events + @user.hosted_events).sort(&date_time)
past_events = []


json.current_events current_events do |event|
  if event.is_past?
    past_events.push(event)
    next
  end
  json.extract! event, :id, :date, :time, :description, :city_id, :location
  json.host event.host, :id, :first_name, :last_name, :image_url
end

json.past_events past_events.sort(&date_time) do |event|
  json.extract! event, :id, :date, :time, :description, :city_id, :location
  json.host event.host, :id, :first_name, :last_name, :image_url
end
