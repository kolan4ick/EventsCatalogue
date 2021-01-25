Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users
  resources :users, only: [:show]
  get 'events/index'
  get 'pages/archive'
  resources :event_subscribes
  resources :events do
    resources :event_subscribes
  end
  ActiveAdmin.routes(self)
  #get 'events/index'
  #get 'events/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :events, only: %i[index show]
root to: "pages#index"
end
