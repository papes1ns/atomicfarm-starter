require 'sidekiq'
require 'sidekiq/web'
# require 'sidekiq-scheduler/web'
# require 'sidekiq/enqueuer'

Sidekiq::Web.use ActionDispatch::Cookies
Sidekiq::Web.use ActionDispatch::Session::CookieStore, key: "_interslice_session"

Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
  [user, password] == ["admin","admin"]
end

if not Rails.env.test?
  # server
  Sidekiq.configure_server do |config|
    config.redis = { url: ENV['REDIS_CONNECTION'] }
  end
  # client
  Sidekiq.configure_client do |config|
    config.redis = { url: ENV['REDIS_CONNECTION'] }
  end
end