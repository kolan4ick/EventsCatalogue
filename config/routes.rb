Rails.application.routes.draw do
  scope '/(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
  devise_for :admin_users, ActiveAdmin::Devise.config
  root to: 'pages#index'
  resources :events do
    resources :event_subscribes
  end
    devise_for :users
    resources :event_subscribes
    resources :users, only: [:show]
    get 'pages/archive'
    get :search, to: 'events#search'
    ActiveAdmin.routes(self)
  end
end
