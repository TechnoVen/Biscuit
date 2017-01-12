class Api::EventsController < ApplicationController
  def show
    @event = Event.find_by_id(params[:id])
  end

  def create
    @event = Event.new(event_params)
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
      :max_guests,
      :description,
      :host_id,
      :city_id,
      :archived
    )
  end
end
