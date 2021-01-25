Rails.application.routes.draw do
  scope '/(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
  devise_for :admin_users, ActiveAdmin::Devise.config
  root to: 'pages#index'
  resources :events do
    resources :event_subscribes
  end
<<<<<<< HEAD
  #clear_commit
  ActiveAdmin.routes(self)
=======
    devise_for :users
    resources :event_subscribes
    resources :users, only: [:show]
    get 'pages/archive'
    get :search, to: 'events#search'
    ActiveAdmin.routes(self)
  end
>>>>>>> 3624dee8545d6df7752a04c39aa80904e6ac4495
end
