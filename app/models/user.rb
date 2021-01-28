class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  #has_many :events
  has_many :event_subscribes
  has_many :events, :through => :event_subscribes
  def events(user)
    events = []
    user.event_subscribes.each do |event_subscribe|
    events.push(Event.find(event_subscribe.event_id))
  end
  end
end
