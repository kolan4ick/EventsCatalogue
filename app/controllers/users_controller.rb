class UsersController < ApplicationController
  before_action :authenticate_user!
  def show
    @user = User.find(params[:id])
    @user_event_subscribes = @user.event_subscribes
  end
end
