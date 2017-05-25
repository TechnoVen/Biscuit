Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show]
    resource :sessions, only: [:create, :destroy]
    resources :events, only: [:show, :index, :create, :update, :destroy]
    resources :cities, only: [:show, :index]
    resources :attendances, only: [:create, :destroy]
    resources :likes, only: [:index]
  end
end
