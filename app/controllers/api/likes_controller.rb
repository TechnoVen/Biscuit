class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end
end
