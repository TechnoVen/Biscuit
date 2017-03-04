class Api::AttendancesController < ApplicationController
  def create
    @attendance = Attendance.new(attendance_params)
    if @attendance.save!
      @event = Event.find_by_id(@attendance.event_id)
      render '/api/events/show'
    else
      render json: { errors: @attendance.errors.full_messages }, status: 422
    end
  end

  def destroy
    attendance = Attendance.find_by_id(params[:id])
    attendance.destroy!
    @event = Event.find_by_id(attendance.event_id)
    render '/api/events/show'
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end
end
