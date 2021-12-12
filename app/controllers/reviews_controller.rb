class ReviewsController < ApplicationController
  before_action :get_product
  before_action :set_review, only: [:show, :destroy]
  
  # # GET /reviews
  def index
    @reviews = @product.reviews

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  def new
    @review = @product.reviews.build
  end

  # POST /reviews
  def create
    @review = @product.reviews.build(review_params)

    # respond_to do |format|
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = @product.reviews.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:name, :comment, :product_id)
    end

    def get_product
      @product = Product.find(params[:product_id])
    end
end
