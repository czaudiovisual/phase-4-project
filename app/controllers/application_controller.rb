class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error

  include ActionController::Cookies

  def render_unprocessable_entity_error(error)
    render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity_
  end
  

end
