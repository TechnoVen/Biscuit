class Api::HostsController < ApplicationController
  def index
    @host = Host.find_by_user_id(current_user.id)
    render 'api/hosts/index'
  end

  def create
    @host = Host.new(host_params)
    @host.user_id = current_user.id
    if @host.save
      render 'api/hosts/index', host: @host
    else
      render json: {errors: ['Sorry, an unknown error has occurred.']}, status: 422
    end
  end

  def update
    @host = Host.find_by_user_id(current_user.id)
    if @host.update(host_params)
      render 'api/hosts/index'
    else
      render json: {errors: ['Sorry, an unknown error has occurred.']}, status: 422
    end
  end

  private

  def host_params
    params.require(:host).permit(:detail1, :detail2, :detail3)
  end
end
