ActiveAdmin.register EventSubscribe do
  actions :all, :except => [:destroy,:edit,:new]
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :user_id, :event_id
  show do |_f|
    attributes_table do
      row :user_id do |obj|
        User.find(obj.user_id)
      end
      row :event_id do |obj|
        Event.find(obj.event_id)
      end
    end
  end
  #
  # or
  #
  # permit_params do
  #   permitted = [:user_id, :event_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
