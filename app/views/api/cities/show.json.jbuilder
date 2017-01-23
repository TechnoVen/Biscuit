json.extract! @city, :id, :name, :image_url

json.events do
  @city.events.each do |event|
    next if event.is_past?

    json.set! event.id do
      json.extract! event, :id, :date, :time, :description, :city_id, :location
      json.host event.host, :id, :first_name, :last_name, :image_url
      json.archived false

      json.attendances do
        event.attendances.each do |attendance|
          json.set! attendance.user_id do
            json.extract! attendance, :id, :user_id
          end
        end
      end
    end
  end
end
