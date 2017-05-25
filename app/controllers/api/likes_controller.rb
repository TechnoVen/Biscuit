class Api::LikesController < ApplicationController
  before_action :require_signed_in!

  def index
    if params["likes"]
      @likes = current_user.likes_me
    elsif params["liked"]
      @likes = current_user.likes_them
    else
      @likes = nil
    end
    render 'api/likes/index'
  end
end
