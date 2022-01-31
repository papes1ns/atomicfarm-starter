require 'sidekiq'
require 'sidekiq/web'
# require 'sidekiq-scheduler/web'
# require 'sidekiq/enqueuer'

Sidekiq::Web.use ActionDispatch::Cookies
Sidekiq::Web.use ActionDispatch::Session::CookieStore, key: "_interslice_session"

Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
  [user, password] == ["admin","admin"]
end

if !Rails.env.test?
  Sidekiq.configure_server do |config|
    config.redis = { url: ENV.fetch('SIDEKIQ_REDIS_URL') {"localhost:6379"} }
  end
end

if !Rails.env.test?
  Sidekiq.configure_client do |config|
    config.redis = { url: ENV.fetch('SIDEKIQ_REDIS_URL') {"localhost:6379"} }
  end
end