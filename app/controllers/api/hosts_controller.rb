class Api::HostsController < ApplicationController
  def update
    host = Host.find_by_user_id(current_user.id)
    if host.update(host_params)
      render 'api/users/show'
    else
      render json: {errors: ['Sorry, an unknown error has occurred.']}, status: 422
    end
  end

  private

  def host_params
    params.require(:host).permit(:detail1, :detail2, :detail3)
  end
end
