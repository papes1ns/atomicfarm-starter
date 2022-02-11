# atomicfarm

Web application for manual measurements at UpwardFarms.

## Setup

Here're the steps to get your development environment up and running.

1. Highly recommend using [vscode](https://code.visualstudio.com/) and installing the recommended extensions for the best development experience
1. Install project dependencies: [direnv](https://direnv.net/), [nodenv](https://github.com/nodenv/nodenv) and [rbenv](https://github.com/rbenv/rbenv). If you are on macOS you can install these via homebrew by running the `installprojectdeps` command
1. Run `direnv allow` after direnv is installed and each time you make a change to `.envrc`. Direnv will automatically source the `.envrc` file when you `cd` to this project. This is crucial for the docker-compose file to read the environment variables
1. Install app dependencies for node and ruby. These can be installed locally on your machine by running `installappdeps`
1. Install [docker desktop](https://docs.docker.com/desktop/)

## Development

1. Run `docker-compose up --build`
1. Run `dbsetup` to run migrations and seed the database

## Testing

### Backend

- Run `testapi` to run API tests inside a docker container. Or `rails test` in the backend dir to run them locally

### Frontend

- TODO

## Docker helper commands

- `testapi` - runs the API integration and unit tests inside docker container
- `dbsetup` - drops db, creates db, runs migrations and seeds the rails db for development inside a docker container
- `dexec` - short-hand command to get a shell in a running docker container

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

## The Rails API decision factors

- Given my (Nate's) experience, Rails proves to be the best for large scale web apps and is the most agile framework. I've used Django, Flask, Sinatra, ASP.net and Rails is the clear winner by far for developer experience and scalability
- Atomicobject has great examples of super well built Rails projects in our github that we can refer to
- Rails includes all the batteries (models, validation, controllers, routing, serializers, async jobs, db migrations, logging, file uploads, test tooling) and everything is **well-tested together**, framework wise. Whereas with JS we would piece together a bunch of libs that aren’t tested together and managing the dependencies and versions is not great
- Rails has proved the test of time, it’s been relevant for many years so therefore I think it will continue to be relevant for years to come. E.g. the JS ecosystem changes very quickly and breaking changes occur more often (from my experience)
- Ruby is the most elegant programming language I’ve ever worked in.. but of course that is subjective :)

## First iteration spec

Nate's ideas for the manual measurements app v1 spec is encapsulated in the google doc shared below.

```
https://docs.google.com/document/d/1gXjPs0tsftRf5TJNL9S51cbSXqFxn-0C0a6X7tvfQBs/edit?usp=sharing
```

(Still very much a work-in-progress)
