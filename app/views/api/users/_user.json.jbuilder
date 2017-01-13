json.extract!(
user,
:id,
:email,
:nickname,
:first_name,
:last_name,
:pet_type,
:city_id,
:attended_events,
:hosted_events
)

json.hosting_profile do
  if user.host
    json.id user.host.id
    json.details do
      json.detail1 user.host.detail1
      json.detail2 user.host.detail2
      json.detail3 user.host.detail3
    end
  end
end
