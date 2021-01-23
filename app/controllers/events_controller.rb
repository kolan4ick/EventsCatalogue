class EventsController < ApplicationController
  before_action :authenticate_user!, except: %i[index show]
  def index
    @events = Event.all.with_attached_images
  end

  def show
      event
  end

  private

  def event
      @event ||= Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:name, :body, :end_date, :begin_date, :place, :avatar, images:[])
  end
  
end
