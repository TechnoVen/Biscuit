class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def show
    @city = City.preload(events: [:host, :attendances]).find_by_id(params[:id])
    if @city
      render '/api/cities/show.json.jbuilder'
    else
      render json: { errors: ['Invalid city id'] }, status: 422
    end
  end
end
