class Api::UsersController < ApplicationController
  def create
    @user = User.new(new_user_params)
    if @user.save
      sign_in(@user)
      render '/api/users/show.json.jbuilder'
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def show
    @user = User
      .preload(attended_events: [:host], hosted_events: [:host])
      .find_by_id(params[:id])
  end

  def update
    @user = User.find_by_id(params[:id])

    if current_user.id === @user.id
      if @user.update(update_user_params)
        render '/api/users/show.json.jbuilder'
      else
        render json: { errors: @user.errors.full_messages }, status: 422
      end
    else
      record_not_found
    end
  end

  private

  def new_user_params
    params
      .require(:user)
      .permit(
        :password,
        :email
      )
  end

  def update_user_params
    params
      .require(:user)
      .permit(
        :profile_1,
        :profile_2,
        :profile_3,
        :city_id
      )
  end
end
