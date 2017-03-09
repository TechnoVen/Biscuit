json.extract! event, :id, :title, :date, :time, :description, :location, :updated_at
json.host event.host, :id, :first_name, :last_name, :image_url

json.attendances do
  event.attendances.each do |attendance|
    json.set! attendance.id do
      json.partial! 'api/attendances/attendance.json.jbuilder', attendance: attendance
    end
  end
end
