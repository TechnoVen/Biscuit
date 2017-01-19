class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def show
    @city = City.find_by_id(params[:id])
    if @city
      if current_user
        @city_events = @city.find_current_events_not_joined_by(current_user.id)
      else
        @city_events = @city.find_current_events
      end
      render '/api/cities/show.json.jbuilder'
    else
      render json: { errors: ['Invalid city id'] }, status: 422
    end
  end
end
