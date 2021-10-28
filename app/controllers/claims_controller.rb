class ClaimsController < ApplicationController

    def index
        claim = Claim.all
        render json: claim, status: :ok
    end
end
