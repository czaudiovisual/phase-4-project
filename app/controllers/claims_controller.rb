class ClaimsController < ApplicationController
    before_action :find_claim, except: [:create, :index]
    before_action :current_user

    # show all claims  
    def index
        render json: current_user.claims, status: :ok
    end

    # create a claims
    def create
        if current_user
            claim = current_user.claims.create!(claim_params)
            render json: claim, status: :created
        end
    end
    

    # show claim claims/:id
    def show
        render json: @claim, status: :ok
    end

    # update claim claims/:id
    def update
        @claim.update!(claim_params)
        render json: @claim, status: :ok
    end

    # destroy claim claims/:id
    def destroy
        if current_user
            current_user.claims.find_by(id: params[:id]).destroy
            head :no_content
        end
    end

    private

    def find_claim
        @claim = Claim.find_by(id: params[:id])
    end

    def claim_params
        params.permit(:address, :item_name, :description, :user_id)        
    end
   
end