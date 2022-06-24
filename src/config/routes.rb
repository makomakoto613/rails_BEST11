Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  get 'posts/index'
  get 'posts/show'
  get 'posts/new'
  get 'posts/edit'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'top' => 'homes#top'

  resources :posts, only: [:create]
  resources :posts

end
