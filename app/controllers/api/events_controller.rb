class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id

    if @event.save!
      render 'api/events/show'
    else
      render json: { errors: @events.errors.full_messages }, status: 422
    end
  end

  def show
    @event = Event.find_by_id(params[:id])
    render 'api/events/show'
  end

  def destroy
    @event = Event.find_by_id(params[:id])
    @event.destroy!

    render 'api/events/show'
  end

  private

  def event_params
    params.require(:event).permit(
      :title,
      :date,
      :time,
      :location,
      :description,
      :lat,
      :lng
    )
  end
end
