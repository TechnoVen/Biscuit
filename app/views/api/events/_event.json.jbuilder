json.extract!(
  event,
  :id,
  :date,
  :time,
  :description,
  :location,
  :host_id,
  :city_id
)

json.host_image event.host.user.image_url

my_attendance = event.attendances.where(user_id: current_user.id)
unless my_attendance.empty?
  json.attendanceId my_attendance.first.id
end
