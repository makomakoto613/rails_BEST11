class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.update(post_params)
    redirect_to post_path(post)
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_to posts_path

  end

  def create
    post = Post.new(post_params)
    post.save
    redirect_to post_path(post.id)
    @post = Post.new(post_params)
    @post.image_url = params['post']['image_url']
    if @post.save
      redirect_to camera_path, notice: '保存しました。'
    else
      render :new
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :category, :body, :image_url)
  end

end
