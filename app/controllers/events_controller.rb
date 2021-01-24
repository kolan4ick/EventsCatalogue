class EventsController < ApplicationController
  def index
    @events = Event.order(:name).page(params[:page]).per($PERPAGE).with_attached_images
  end

  def show
      event
  end
  private

  def event
      @event ||= Event.find(params[:id])
  end
end
