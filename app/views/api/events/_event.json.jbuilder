json.extract! event, :id, :date, :time, :description, :city_id, :location
json.host event.host, :id, :first_name, :last_name, :image_url

json.attendances do
  event.attendances.each do |attendance|
    json.set! attendance.id do
      json.partial! 'api/attendances/attendance', attendance: attendance
    end
  end
end
