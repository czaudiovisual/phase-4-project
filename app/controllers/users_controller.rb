class UsersController < ApplicationController
    
    def index
        render json: User.all
        # render json:{message: 'Hello'}
    end
end
