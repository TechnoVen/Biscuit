json.extract!(
  event,
  :id,
  :date,
  :time,
  :description,
  :location,
  :host_id,
  :city_id,
)

my_attendance = event.attendances.where(user_id: current_user.id)
unless my_attendance.empty?
  json.attendanceId my_attendance.first.id
end
