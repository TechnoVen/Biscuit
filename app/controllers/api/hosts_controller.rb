class Api::HostsController < ApplicationController
  def create
    @host = Host.new(host_params)
    @host.host_id = current_user.id
    if @host.save
      render 'api/hosts/show'
    else
      render json: {errors: ['Sorry, an unknown error has occurred.']}, status: 422
    end
  end

  def show
    @host = Host.find_by_user_id(params[:id])
    if @host
      render 'api/hosts/show'
    else
      render json: {errors: ['Sorry, an unknown error has occurred.']}, status: 422
    end
  end

  def update
    host = Host.find_by_user_id(current_user.id)
    if host.update(host_params)
      render 'api/hosts/show'
    else
      render json: {errors: ['Sorry, an unknown error has occurred.']}, status: 422
    end
  end

  private

  def host_params
    params.require(:host).permit(:detail1, :detail2, :detail3)
  end
end
