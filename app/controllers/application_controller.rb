class ApplicationController < ActionController::API
  
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
  
  # before_action: authorize

  def render_unprocessable_entity_error(error)
    render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found_error(error)
    render json: {error: "record not found"}, status: :not_found
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  
  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end
  
  private
  
  def current_user
    User.find_by(id: session[:user_id])
    # @user = User.first 
  end
end