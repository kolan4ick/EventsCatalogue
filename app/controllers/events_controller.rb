class EventsController < ApplicationController
  def index
    @events = Event.order(:name).page(params[:page]).per($PERPAGE).with_attached_images
  end

  def show
      event
  end
  def search
    @events = Event.all
      if params[:begin_date].present?
        start_date = Date.parse(params[:begin_date])
        @search = @events.where("event.begin_date >= ?", start_date)
      end
      if params[:end_date].present?
        end_date = Date.parse(params[:end_date])
        @search = @events.where("event.end_date >= ?", end_date)
      end
  end
  private

  def event
      @event ||= Event.find(params[:id])
  end
end
