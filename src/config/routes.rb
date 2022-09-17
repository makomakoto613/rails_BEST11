Rails.application.routes.draw do
  devise_for :users
  root 'formation_posts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'top' => 'homes#top'
  get 'new' => 'homes#new'
  resources :formation_posts
  post 'formation_posts' => 'formation_posts#create'

end