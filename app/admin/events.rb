ActiveAdmin.register Event do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
   permit_params :name, :end_date, :begin_date, :body, :place, :avatar, images:[]
   form do |f|
     f.inputs do
       f.input :name
       f.input :body, as: :text
       f.input :place
       f.input :begin_date
       f.input :end_date
       f.input :avatar, as: :file
       f.input :images, as: :file, input_html: { multiple: true }
     end
   f.actions
 end

 show do |f|
     attributes_table do
       row :name
       row :body
       row :place
       row :begin_date
       row :end_date
       row :avatar do |object|
         image_tag object.photo, width:250
       end
       row :images do
        div do
          f.images.each do |picture|
            div do
              span image_tag picture, width:250
            end
          end
        end
      end
     end
   end
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :end_date, :begin_date, :body, :place]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

end
