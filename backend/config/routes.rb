Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: %i[show create update destroy]
      resources :orders, only: %i[index show create]
      resources :tokens, only: [:create]
      resources :products
    end

    namespace :jobs do
      mount Sidekiq::Web => '/ui'
    end

  end
end
