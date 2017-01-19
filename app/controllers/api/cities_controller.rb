class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def show
    @city = City.find_by_id(params[:id])
    if @city
      if current_user
        render '/api/cities/show_signed_in.json.jbuilder'
      else
        render '/api/cities/show.json.jbuilder'
      end
    else
      render json: { errors: ['Invalid city id'] }, status: 422
    end
  end
end
