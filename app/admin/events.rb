ActiveAdmin.register Event do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
   permit_params :name, :end_date, :begin_date, :body, :place
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :end_date, :begin_date, :body, :place]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

end
