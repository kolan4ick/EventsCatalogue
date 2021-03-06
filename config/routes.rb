Rails.application.routes.draw do
  scope '/(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users, controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }
    devise_for :users, skip: [:sessions] do
      get '/admin' => 'devise/sessions#new', :as => :new_user_session
      post '/admin' => 'devise/sessions#create', :as => :user_session
    end
    root to: 'pages#index'
    resources :events do
      resources :event_subscribes
    end
    resources :event_subscribes
    resources :users, only: [:show]
    get 'pages/archive'
    get :search, to: 'events#search'
  end
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
end
