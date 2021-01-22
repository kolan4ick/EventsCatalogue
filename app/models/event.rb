class Event < ApplicationRecord
  has_one_attached :avatar
  has_many_attached :images
  def set_image=(src)
    file = URI.parse(src).open
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
