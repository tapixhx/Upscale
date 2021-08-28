class Api::AdvertisementsController < ApplicationController
  before_action :set_advertisement, only: [:show, :update, :destroy]
  before_action :authorized

  # GET api/advertisements
  def index
    @advertisements = Advertisement.all

    render json: @advertisements
  end

  # GET api/advertisements/:id
  def show
    render json: @advertisement
  end

  # POST api/advertisements
  def create
    @advertisement = Advertisement.new(advertisement_params)

    @advertisement.user = @user
    if !(@advertisement.category == "E-Commerce" || @advertisement.category == "Crypto" || @advertisement.category == "Games" || @advertisement.category == "Event")
      return render json: {error: "Invalid Category "}
    end
    if @advertisement.save
      render json: @advertisement, status: :created
    else
      render json: @advertisement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT api/advertisements/1
  def update
    user_id = decoded_token[0]['user_id']
    adv = Advertisement.find_by(id: params[:id])
    if adv.user_id!=user_id
      return render json: {error: "Advertisement not belongs to you"}
    end
    if @advertisement.update(advertisement_params)
      render json: @advertisement
    else
      render json: @advertisement.errors, status: :unprocessable_entity
    end
  end

  # DELETE api/advertisements/:id
  def destroy
    user_id = decoded_token[0]['user_id']
    adv = Advertisement.find_by(id: params[:id])
    if adv.user_id!=user_id
      return render json: {error: "Advertisement not belongs to you"}
    end
    @advertisement.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_advertisement
      @advertisement = Advertisement.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def advertisement_params
      params.require(:advertisement).permit(:title, :image, :category, :content, :user_id, :publish)
    end
end
