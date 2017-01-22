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

json.current_events do
  json.attended_events @user.attended_events do |event|
    next if event.is_past?
    event.extract! event, :date, :time, :description, :host_id, :city_id, :location
  end

  json.hosted_events @user.hosted_events do |event|
    next if event.is_past?
    event.extract! event, :date, :time, :description, :host_id, :city_id, :location
  end
end
