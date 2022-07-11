class FormationPostsController < ApplicationController
  def index
    @formation_posts = FormationPost.all
  end

  def show
    @formation_post = FormationPost.find(params[:id])
  end

  def new
    @formation_post = FormationPost.new

  end

  def edit
    @formation_post = FormationPost.find(params[:id])
  end

  def update
    formation_post = FormationPost.find(params[:id])
    formation_post.update(formation_post_params)
    redirect_to formation_post_path(formation_post)
  end

  def destroy
    formation_post = FormationPost.find(params[:id])
    formation_post.destroy
    redirect_to formation_posts_path

  end

  def create
    binding.pry
    @formation_post = FormationPost.new(formation_post_params)

    if @formation_post.save
      redirect_to formation_posts_path, notice: '保存しました。'
    else
      render :new
    end
  end

  private
  def formation_post_params
    params.require(:formation_post).permit(:title, :category, :body, :image_url, :coordinates1)
  end
end
