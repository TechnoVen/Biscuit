class Api::AttendancesController < ApplicationController
  def create
    @attendance = Attendance.new(attendance_params)
    if @attendance.save!
      city_id = Event.find_by_id(@attendance.event_id).city_id
      @city = City.find_by_id(city_id)
      @city_events = @city.find_current_events_not_joined_by(current_user.id)

      render '/api/cities/show.json.jbuilder'
    else
      render json: { errors: @attendance.errors.full_messages }, status: 422
    end
  end

  def destroy
    attendance = Attendance.find_by_id(params[:id])
    attendance.destroy!
    @current_events = Event.includes(:attendances).find_current_user_events(current_user.id)
    render '/api/events/index.json.jbuilder'
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end
end
