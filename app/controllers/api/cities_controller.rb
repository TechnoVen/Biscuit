class Api::CitiesController < ApplicationController
  def index
    @cities = City.all.order(:id)
  end

  def show
    @city = City.find_by_id(params[:id])
    if @city
      render '/api/cities/show.json.jbuilder'
    else
      render json: { errors: ['Invalid city id'] }, status: 422
    end
  end
end
