class EventsController < ApplicationController
  def index
    @events = Event.where('end_date >= ?',Time.now).page(params[:page]).per($PERPAGE).with_attached_images
  end

  def show
      event
  end
  def search
    @search = params[:search]
    # @events = Event.all
    type_filter
    data_filter
    @events = @events.where("place LIKE '%#{params[:search]}%'").page(params[:page]).per($PERPAGE).with_attached_images
  end
  private
  def type_filter
    @price_type = params[:price_type]
    if !(@price_type.eql? '')
      @events = Event.where(price: @price_type)
    end
  end

def data_filter
  @end_date = params[:end_date]
  @begin_date = params[:begin_date]
  if @begin_date != '' || @end_date != ''
  @events = @events.where('end_date <= ? AND begin_date >= ?', @end_date.to_date, @begin_date.to_date)
else
  @events = @events.order(:name).page(params[:page]).per($PERPAGE).with_attached_images
end
end
  def event
      @event ||= Event.find(params[:id])
  end
end
