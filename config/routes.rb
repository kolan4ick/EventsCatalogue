Rails.application.routes.draw do
  devise_for :users
  resources :users
  get 'events/index'
  resources :event_subscribes
  devise_for :admin_users, ActiveAdmin::Devise.config
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
