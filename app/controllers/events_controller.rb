class EventsController < ApplicationController
  def index
    @events = Event.where('end_date >= ?',Time.now).page(params[:page]).per($PERPAGE).with_attached_images
  end

  def show
      event
  end
  private

  def event
      @event ||= Event.find(params[:id])
  end
end
