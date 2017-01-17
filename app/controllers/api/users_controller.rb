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
    @user = User.find_by_id(params[:id])
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
        :email,
        :first_name
      )
  end

  def update_user_params
    params
      .require(:user)
      .permit(
        :password,
        :nickname,
        :first_name,
        :last_name,
        :pet_type,
        :city_id
      )
  end
end
