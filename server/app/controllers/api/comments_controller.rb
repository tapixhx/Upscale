class Api::CommentsController < ApplicationController
  skip_before_action :authorized, :only => [:index]
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    @comment = Comment.where advertisements: params[:advertisement_id]
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    # puts "#{comment_params}"
    @comment.user = @user
    @comment.advertisement = Advertisement.find(params[:advertisement_id])
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end
    
    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :advertisement_id, :user_id)
    end

    def options
      @options ||= {include: %i[comments]}
    end
end
