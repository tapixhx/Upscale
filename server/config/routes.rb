Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :advertisements
  # resources :comments
  namespace :auth do
    resource :users
    post "/login", to: "users#login"
    post "/register", to: "users#register"
  end
  namespace :api do
    resources :advertisements do 
      resources :comments 
    end
    get "/useradv", to: "advertisements#useradv"
  end
end
