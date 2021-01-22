ActiveAdmin.register Event do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :end_date, :begin_date, :body, :place, :avatar, photos:[]
  form do |f|
    f.inputs do
      f.input :name
      f.input :body, as: :text
      f.input :place
      f.input :begin_date
      f.input :end_date
      f.input :avatar, as: :file
      f.input :photos, as: :file, input_html: { multiple: true }
    end
    f.actions
  end

  show do |_f|
    attributes_table do
      row :name
      row :body
      row :place
      row :begin_date
      row :end_date
      row :avatar do |object|
        event_image(object.avatar)
      end
      row :images do
        div do
          _f.images.each do |picture|
            div do
              span image_tag picture, width:250, height: 250
              span link_to t(:delete), delete_picture_admin_event_path(_f.id, picture_id: picture.id),
                           method: :delete, data: { confirm: 'Are you sure?' }
            end
          end
        end
      end
    end
  end

  member_action :delete_picture, method: :delete do
    picture = ActiveStorage::Attachment.find(params[:picture_id])
    picture.purge_later
    redirect_back(fallback_location: admin_event_path(params[:id]))
  end

  member_action :delete_photo, method: :delete do
    event = Event.find(params[:id])
    photos = event.images.split(',')
    photos.delete(params[:url])
    event.update(images: photos.join(','))
    redirect_back(fallback_location: admin_event_path(params[:id]))
  end
end
