class EventsController < ApplicationController
  def index
  end

  def show
      event
  end

  private

  def event
      @event ||= Event.find(params[:id])
  end
  def event_params
    params.require(:event).permit(:name, :body, :end_date, :begin_date, :place, :avatar. images:[])
  end
end
