class EventsController < ApplicationController
  def index
    @events = Event.where('end_date >= ?',Time.now).page(params[:page]).per($PERPAGE).with_attached_images
  end

  def show
      event
  end
  def search
  end_date = params[:end_date]
  begin_date = params[:begin_date]
  @events = Event.where('end_date <= ? AND begin_date >= ?',end_date, begin_date)
  end
  private

  def event
      @event ||= Event.find(params[:id])
  end
end
