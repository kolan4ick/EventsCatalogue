class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @events = []
    @user.event_subscribes.each do |event_subscribe|
    @events.push(Event.find(event_subscribe.event_id))
    end
    @events = Kaminari.paginate_array(@events).page(params[:page]).per($PERPAGE)
  end
end
