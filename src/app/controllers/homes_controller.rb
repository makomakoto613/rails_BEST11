class HomesController < ApplicationController

  def top
    @posts = Post.all
  end

  def create
  end


end
