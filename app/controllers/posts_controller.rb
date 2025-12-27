class PostsController < Jetski::BaseController
  def new
  
  end

  def create
    @post = Post.create(**post_params)
    redirect_to "/"
  end

  def index
    @root = true
    @posts = Post.all
  end
private
  def post_params
    {
      title: params["posts"]["title"],
      body:  params["posts"]["body"],
    }
  end
end
