json.extract! @city, :id, :name, :image_url
json.events(
  @city.events
  .joins('LEFT OUTER JOIN hosts ON hosts.id = events.host_id')
  .joins('LEFT OUTER JOIN attendances ON attendances.event_id = events.id')
  .where(['hosts.id != ? AND (attendances.user_id IS NULL OR attendances.user_id != ?)', "#{current_user.id}", "#{current_user.id}"])
  .sort { |i, j| i.date.to_time <=> j.date.to_time },
    :id,
    :city_id,
    :date,
    :description,
    :host_id,
    :archived,
    :location,
    :time
)
json.hosts @city.hosts.uniq, :id, :user_id, :detail1, :detail2, :detail3
