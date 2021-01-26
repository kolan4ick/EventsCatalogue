class EventsController < ApplicationController
  def index
    @events = Event.where('end_date >= ?',Time.now).page(params[:page]).per($PERPAGE).with_attached_images
  end

  def show
      event
  end
  def search
    @search = params[:search]

    data_filter
    type_filter
    @events = @events.where("place LIKE '%#{params[:search]}%'")
  end
  private
  def type_filter
    @filter = params[:filter]
    
    @events = Event.where(price: @filter)
  end

def data_filter
  end_date = params[:end_date]
  begin_date = params[:begin_date]
  if begin_date != '' || end_date != ''
  @events = Event.where('end_date <= ? AND begin_date >= ?',end_date, begin_date)
else
  @events = Event.order(:name).page(params[:page]).per($PERPAGE).with_attached_images
end
end
  def event
      @event ||= Event.find(params[:id])
  end
end
