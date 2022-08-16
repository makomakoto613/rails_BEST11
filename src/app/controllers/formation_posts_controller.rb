class FormationPostsController < ApplicationController
  def index
    @formation_posts = FormationPost.all
  end

  def show
    @formation_post = FormationPost.find(params[:id])
  end

  def new
    @formation_post = FormationPost.new
    @uniform = Uniform.new
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
    @formation_post = FormationPost.new(formation_post_params)
    p(formation_post_params)
    @formation_post.save
    # A = formation_post_params["title"]
    # B = formation_post_params["body"]
    # {"title"=>"A","body"=>"B"}
    # @formation_post = FormationPost.new(formation_post_params["title"])
    # coordinates = JSON.parse(@uniform["coordinates1"])
    # coordinates.each do |coordinate|
    #   uniform_params = coordinate["x"]

    redirect_to formation_posts_path, notice: '保存しました'
  end

  formation_post_params = {
    "authenticity_token"=>"[FILTERED]",
    "formation_post"=>
      {
        "title"=>"",
        "body"=>"",
        "coordinates1"=>
          "[{\"x\":210,\"y\":55},{\"x\":130,\"y\":63},{\"x\":50,\"y\":55},{\"x\":90,\"y\":115},{\"x\":170,\"y\":115},{\"x\":130,\"y\":165},{\"x\":90,\"y\":215},{\"x\":170,\"y\":215},{\"x\":20,\"y\":185},{\"x\":250,\"y\":185}]"
      },
    "commit"=>"投稿"
  }


  # @formation_post = FormationPost.new(formation_post_params["formation_post"].delete("coordinates1"))
  # @formation_post.save

  # @uniform = Uniform.new(formation_post_params["formation_post"].delete("title","body"))
  # @uniform.save



  # # formation_post = {}
  # # formation_post.push(title)
  # # formation_post.push(body)

  # # formation_post_params.push(authenticity_token)
  # # formation_post_params.push(formation_post)


  # A = formation_post_params["title"]
  # formation_params = {
  #   "authenticity_token"=>"[FILTERED]",
  #   "formation_post"=>
  #     {
  #       "title"=>A,
  #       "body"=>"",
  #     },
  #   "commit"=>"投稿"
  # }

  # @formation_post_params = FormationPost.new(formation_params)
  # formation_post_id = @formation.save

  # each coordinates1
  #   uniform_params = {
  #     "authenticity_token"=>"[FILTERED]",
  #     "uniform_params"=>
  #       {
  #         "x":210,
  #         "y":55
  #       },
  #     "commit"=>"投稿"
  #   }
  #   @uniform = Uniform.new(uniform_params)
  #   uniform_id = @uniform.save

  #   formation_uniform_params = {
  #     "authenticity_token"=>"[FILTERED]",
  #     "formation_uniform_params"=>
  #       {
  #         "formation_post_id":formation_post_id,
  #         "uniform_id":uniform_id
  #       },
  #     "commit"=>"投稿"
  #   }
  #   @formation_uniform.save

  private
  def formation_post_params
    params.require(:formation_post).permit(:title, :body, :coordinates)
  end

end
