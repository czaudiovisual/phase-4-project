class ClaimsController < ApplicationController

    before_action :set_claim, only: [:show, :update, :destroy]

    # to show all claims
    def index
       if params[:user_id]
        @claims = Claim.where(user_id: params[:user_id])
       else
         @claims = Claim.all
       end
        render json: @claims, status: :ok
    end

    # to show a user by id claims/:id
    def show
        render json: @claim, status: :ok
    end

    # to create a claim
    def create
        @claim = Claim.create!(claim_params)
        render json: @claim, status: :created
    end

    # to update a claim by id claims/:id
    def update
        @claim.update!(claim_params) 
        render json: @claim, status: :accepted
    end

    # to delete a claim by id claims/:id
    def destroy
        @claim.destroy
        head :no_content, status: :ok
    end

    private

    def claim_params
        params.require(:claim).permit(:address, :item_name, :description, :user_id)        
    end

    # set instance variable scoped to the instance
    def set_claim
        @claim = Claim.find(params[:id])
    end
end
