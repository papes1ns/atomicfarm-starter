# atomicfarm

Web application for manual measurements at UpwardFarms.

## Setup

1. run install dependencies script
1. run db initializer
1. run docker compose up --build

## commands

## Technologies

- Docker compose
- Postgresql
- Nginx proxy
- Ruby on Rails 6 (API only)
- Sidekiq for background API job processing
- React

## Architecture

The application can be built using `docker-compose up --build`.

There are several interlinking services orchestrated in individual containers: `db` (the postgresql instance), `backend` (the Rails api), `frontend` (the React application) and finally the `nginx` proxy container which pulls everything together and which is the only container which exposes any ports to the host machine.

The nginx conf can be found at `/config/nginx/proxy.conf`.

The Rails application is proxied from port `3000` to `http://localhost:8080/api` and the React application is proxied from port `4000` to the root at `http://localhost:8080/`.

## forked from

- https://github.com/wobsoriano/vite-react-tailwind-starter
- https://github.com/adaam2/docker-rails-react-starter
- https://github.com/madeindjs/api_on_rails
- https://github.com/ohbarye/rails-react-typescript-docker-example
