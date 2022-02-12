# Atomicfarm frontend example

Frontend for UpwardFarms manual measurement web app.

## Local environment setup

### nodenv

We use [nodenv](https://github.com/nodenv/nodenv) to manage the Node version used on this project.

```bash
$ brew install nodenv
$ nodenv install 16.13.0     # or whatever Node version is specified in the '.node-version' file
$ node --version            # this should match the version in the '.node-version' file
```

Node version should also match the version sourced with direnv, e.g. `NODENV_VERSION=16.13.0`

### yarn

We use [yarn](https://classic.yarnpkg.com/lang/en/) to manage installing dependencies for our project. After verifying you have the correct Ruby version installed, you can setup Yarn and the project dependencies with the following commands:

```bash
$ npm install yarn --no-save --no-package-lock --force     # only want to use npm to install yarn
$ yarn install --modules-folder node_modules
```

## Development

```sh
yarn dev
```

## Build

```sh
yarn build
```

## Requirements

- nodenv
- node 16.13.0
