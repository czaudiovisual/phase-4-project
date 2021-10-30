class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    # to show all users
    def index
        user = User.all
        render json: user, status: :ok
    end

    # to show a user by id users/:id
    def show
        render json: @user, status: :ok
    end

    # to create a user
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    # to update a user by id users/:id
    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    # to delete a user by id users/:id
    def destroy
        @user.destroy
        head :no_content, status: :ok
    end

    private

    def user_params
        params.require(:user).permit(:name, :profile_picture, :username, :password, :password_confirmation)        
    end

    # set instance variable scoped to the instance
    def set_user
        @user = User.find(params[:id])
    end
end
