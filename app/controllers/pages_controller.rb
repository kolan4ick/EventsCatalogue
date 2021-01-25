class PagesController < ApplicationController
  def index
  end
  def archive
    @events = Event.where('end_date <= ?',Time.now).page(params[:page]).per($PERPAGE).with_attached_images
  end
end
