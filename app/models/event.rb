class Event < ApplicationRecord
  has_one_attached :avatar
  has_many_attached :images

  def photo
    if avatar.attached?
      avatar
    else
      '/undefind.png'
    end
  end
end
