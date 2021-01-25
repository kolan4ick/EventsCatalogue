Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  scope '/(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users
    resources :users, only: [:show]
    get 'pages/archive'
    resources :event_subscribes
    root to: 'pages#index'
    get :search, to: 'events#search'
    resources :events do
      resources :event_subscribes
    end
  end
  ActiveAdmin.routes(self)
end
