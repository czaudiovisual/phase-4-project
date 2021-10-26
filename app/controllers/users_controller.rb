class UsersController < ApplicationController
    
    # to show all users
    def index
        user = User.all
        render json: user, status: :ok
    end

    # to show a user by id users/:id
    def show
        set_user
        render json: @user, status: :ok
    end

    # to create a user
    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    # to update a user by id users/:id
    def update
        # find user to update
        set_user
        @user.update(user_params)
        head :no_content, status: :ok
    end

    # to delete a user by id users/:id
    def destroy
        set_user
        @user.destroy
        render json: {message: 'deleted'}, status: :accepted
    end


    private

    def user_params
        params.require(:user).permit(:name, :profile_picture, :username, :password, :password_confirmation)        
    end

    # set instance variable scoped to the instance
    def set_user
        @user = User.find_by(id: params[:id])
    end
end
