class EventSubscribesController < ApplicationController
  def create
    Event.find(params[:event_id]).event_subscribes.create(user_id: current_user.id)
    redirect_to request.referrer
  end

  def destroy
    Event.find(params[:event_id]).event_subscribes.find(params[:id]).destroy
    redirect_to request.referrer
  end

  def new; end
end
