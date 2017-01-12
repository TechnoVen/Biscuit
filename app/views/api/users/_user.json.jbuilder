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
    json.desc_1 user.host.desc_1
    json.desc_2 user.host.desc_2
    json.desc_3 usr.host.desc_3
  end
end
