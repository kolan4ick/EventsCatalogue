class ApplicationController < ActionController::Base
  $PERPAGE = 9
  before_action :set_locale

  private

  def set_locale
    I18n.locale = extract_locale || I18n.default_locale
  end

  def extract_locale
    params[:locale] || http_accept_language.compatible_language_from(I18n.available_locales).to_s
  end
end
