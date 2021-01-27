class ApplicationController < ActionController::Base
  helper_method :resource_name, :resource, :devise_mapping, :resource_class
  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def resource_class
    User
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
  $PERPAGE = 9
  before_action :set_locale

  def default_url_options(options = {})
    {
      locale: I18n.locale
    }.merge options
  end

  private

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end
