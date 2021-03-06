class Api::EventsController < ApplicationController
  def index
    @current_events = Event
                        .includes(:attendances)
                        .find_current_user_events(current_user.id)
    @past_events = Event.find_past_user_events(current_user.id)
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    @event.city_id = current_user.city_id
    if @event.save!
      render :index
    else
      render json: { errors: @events.errors.full_messages }, status: 422
    end
  end

  def destroy
    event = Event.find_by_id(params[:id])
    event.destroy!

    @current_events = Event
                        .includes(:attendances)
                        .find_current_user_events(current_user.id)
    @past_events = Event.find_past_user_events(current_user.id)

    render :index
  end

  private

  def event_params
    params.require(:event).permit(
      :date,
      :time,
      :location,
      :description,
      :city_id
    )
  end
end
