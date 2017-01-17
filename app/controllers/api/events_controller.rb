class Api::EventsController < ApplicationController
  def index
    @events = Event.where(host_id: current_user.id)
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    @event.city_id = current_user.city_id
    if @event.save!
      render '/api/events/show.json.jbuilder'
    else
      render json: { errors: @events.errors.full_messages }, status: 422
    end
  end

  def update
    @event = Event.find_by_id(params[:id])
    if @event.update(event_params)
      render '/api/events/show.json.jbuilder'
    else
      render json: { errors: @events.errors.full_messages }, status: 422
    end
  end

  def destroy
    @event = Event.find_by_id(params[:id])
    @event.destroy
    render 'api/events/show.json.jbuilder'
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
