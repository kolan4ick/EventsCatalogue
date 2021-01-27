# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  # GET /resource/sign_in
  # def new
  # end
  def new
    if params[:action] == 'new'
      flash[:info] = 'Registrations are not open.'
      redirect_to root_path
    else
      super
    end
  end

  def create
    if params[:action] == 'new'
      flash[:info] = 'Registrations are not open.'
      redirect_to root_path
    else
      super
    end
  end
  respond_to :html, :js
  # POST /resource/sign_in
  # def create
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   redirect_to request.referrer
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
