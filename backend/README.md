# Combine backend

Rails backend for UpwardFarm's manual measurement web app.

## Local environment setup

### rbenv

We use [rbenv](https://github.com/rbenv/rbenv) to manage the Ruby version used on this project. In addition to installing it through Homebrew, you will most likely need to initialize it for your desired shell, see the [installation instructions](https://github.com/rbenv/rbenv#installation) for more information.

```bash
$ brew install rbenv
$ rbenv install 3.1.0     # or whatever Ruby version is specified in the '.ruby-version' file
$ ruby --version          # this should match the version in the '.ruby-version' file
```

Ruby version should also match the version sourced with direnv, e.g. `RBENV_VERSION=3.1.0`

### bundler

We use [Bundler](https://bundler.io) to manage installing dependencies for our project. After verifying you have the correct Ruby version installed, you can setup Bundler and the project dependencies with the following commands:

```bash
$ gem install bundler
$ bundle install --path vendor/bundle
```

If you run into openssl related compile problems on your Mac it could be because you've got an openssl installation that came from Homebrew. Try something like:

```bash
$ bundle config --local build.puma --with-opt-dir=/usr/local/opt/openssl
$ bundle config --local build.eventmachine --with-opt-dir=/usr/local/opt/openssl
```

(repeat by replacing "puma" with the name of other failing gems)

If you run into issues installing mysql2 gem locally on macOS try:

```bash
bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl/lib --with-cppflags=-I/usr/local/opt/openssl/include"

```

### Create, migrate, seed database

```bash
rails db:create
rails db:migrate
rails db:seed
```

## Development

Starting the Rails app is as simple as running `bundle exec rails --server` or `bundle exec rails s`. If you want to open a Rails console for the application you can do so with `bundle exec rails --console` or `bundle exec rails c`

Test suite can be ran with `rails test`

## HTTP API examples

Create user

```sh
curl -X POST -d 'user[email]=toto@toto.fr' -d 'user[password]=toto1234' localhost:3000/api/v1/users
```

Obtain token

```sh
curl -X POST -d 'user[email]=toto@toto.fr' -d 'user[password]=toto1234' localhost:3000/api/v1/tokens
```

Manage product

```sh
export TKN="eyJhbG...WqaXAcnE" # from /api/v1/tokens
# create
curl -X POST -H "Authorization: $TKN" -d "product[title]=Bag" -d "product[price]=10" localhost:3000/api/v1/products
# update: publish and add stock
curl -X PATCH -H "Authorization: $TKN" -d "product[published]=true" -d "product[quantity]=2" localhost:3000/api/v1/products/19
# list
curl -H "Authorization: $TKN" localhost:3000/api/v1/products
# delete
curl -X DELETE -H "Authorization: $TKN" localhost:3000/api/v1/products/19
```

Manage order

```sh
export TKN="eyJhbG...WqaXAcnE" # from /api/v1/tokens
# create
curl -X POST -H "Authorization: $TKN" -d "order[product_ids_and_quantities][][product_id]=20" -d "order[product_ids_and_quantities][][quantity]=1" localhost:3000/api/v1/orders
# list
curl -H "Authorization: $TKN" localhost:3000/api/v1/orders
# show
curl -H "Authorization: $TKN" localhost:3000/api/v1/orders/7
```

## Requirements

- rbenv
- ruby 3.1.0
- sqlite
- mysql (or, mariadb)
