Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :sessions, only: [:create, :destroy]
    resources :events, only: [:show, :index, :create, :update, :delete]
  end
end
