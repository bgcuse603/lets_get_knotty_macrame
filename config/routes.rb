Rails.application.routes.draw do
  
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users

  resources :reviews
  resources :products
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
