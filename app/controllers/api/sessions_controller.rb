class Api::SessionsController < ApplicationController
  before_action :require_signed_in!, only: [:destroy]

  def create
    @user = User
      .preload(attended_events: [:host], hosted_events: [:host])
      .find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )

    if @user
      sign_in(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: { errors: ["Invalid username or password"] }, status: 401
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
