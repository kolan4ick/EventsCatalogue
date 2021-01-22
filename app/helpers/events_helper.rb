module EventsHelper
  def event_image(image, width=250, height=250, clas="")
    image_tag (image.attached? ? image : '/nfd.jpg'), width: width, height: height, class: clas
  end
end
