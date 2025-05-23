# Combine

Web application for manual measurements at UpwardFarms.

## Setup

Here're the steps to get your development environment up and running.

1. Highly recommend using [vscode](https://code.visualstudio.com/) and installing the recommended extensions for the best development experience
1. Install project dependencies: [direnv](https://direnv.net/), [nodenv](https://github.com/nodenv/nodenv) and [rbenv](https://github.com/rbenv/rbenv)
1. Run `direnv allow` after direnv is installed and each time you make a change to `.envrc`. Direnv will automatically source the `.envrc` file when you `cd` to this project. This is crucial for the docker-compose file to read the environment variables
1. Install app dependencies for node and ruby. These can be installed locally on your machine by running `installappdeps`
1. Install [docker desktop](https://docs.docker.com/desktop/)

## Development

1. Run `docker-compose up --build`. This one command will spin up all the services required to do development work.
1. Run `dbsetup` to run migrations and seed the relational database.
1. Run `runyarn` each time you add a new dependency to `package.json` file. Also, if you notice your frontend container is failing to start, it's likely because the node_modules volume is out of sync with `package.json`. The `runyarn` command will get them back in sync, and the frontend should then be able to successfully start.

## Testing

### Backend

- Run `testapi` to run API tests inside a docker container. Or `rails test` in the backend dir to run them locally

### Frontend

- TODO

## Docker helper commands

- `testapi` - runs the API integration and unit tests inside docker container
- `dbsetup` - drops db, creates db, runs migrations and seeds the rails db for development inside a docker container
- `dexec` - shorthand command to get a shell in a running docker container
- `runyarn` - synchronizes node_modules volume with package.json

## Technologies

- docker - service orchestration, containerization
- mysql - relational database
- nginx - reverse proxy to link services together, for dev env only
- rails - batteries-include backend MVC framework
- sidekiq - background job processing
- react - frontend framework
- vite - fast, simple frontend tooling
- tailwindcss - css framework

## Architecture

The application can be built using `docker-compose up --build`.

There are several interlinking services orchestrated in individual containers: `db` (the mysql instance), `backend` (the Rails api), `frontend` (the React application) and finally the `nginx` proxy container which pulls everything together.

The nginx conf can be found at `/config/nginx/proxy.conf`.

The Rails application is proxied from port `3000` to `http://localhost:8080/api` and the React application is proxied from port `4000` to the root at `http://localhost:8080/`.

The worker service is used for syncing data from the Rails db to InfluxDB.

Redis is used as an array the worker service retrieve jobs from. Can also be used as a cache to reduce db queries and compute times.
