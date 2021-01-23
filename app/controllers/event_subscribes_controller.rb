class EventSubscribesController < ApplicationController
  def create
    EventSubscribe.create(event_subscribes_params)
  end
  def new
  end

  private
  def event_subscribes_params
    params.require(:event_subscribes).permit(:user, :event)
  end
end
