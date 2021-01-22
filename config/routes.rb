Rails.application.routes.draw do
  get 'pages/index'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  #get 'events/index'
  #get 'events/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :events, only: %i[index show]
root to: "events#index"
end
