class Event < ApplicationRecord
  has_one_attached :avatar
  has_many_attached :images
  has_many :event_subscribes
  has_many :users, :through => :event_subscribes

  def set_image=(src)
    file = File.open(Rails.root.join("public/seed_img/#{src}"))
    avatar.attach(io: file, filename: name)
  rescue OpenURI::HTTPError => e
    pp e
  end

  def photos=(objects)
    objects.each do |object|
      images.attach(io: object.open, filename: object.original_filename)
    end
  end
end
