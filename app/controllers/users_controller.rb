class UsersController < ApplicationController
    
    # to show all users
    def index
        user = User.all
        render json: user, status: :ok
    end

    # to show a user by id users/:id
    def show
        user = User.find_by(id: params[:id])
        render json: user, status: :ok
    end

    # to create a user
    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    # to update a user by id users/:id
    def update
        # find user to update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: user, status: :accepted
    end


    private

    def user_params
        params.require(:user).permit(:name, :profile_picture, :username, :password, :password_confirmation)        
    end

end
