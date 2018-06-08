# Node.js Starter Kit

> This repo is a starter kit for working with [Node.js](http://nodejs.org), [Handlebars](http://handlebarsjs.com) (both server and client side), [Sass](http://sass-lang.com) (via [node-sass](https://github.com/sass/node-sass)), and [Babel](https://babeljs.io/) (via [spire-of-babel](https://github.com/neogeek/spire-of-babel)).

[![Build Status](https://travis-ci.org/neogeek/nodejs-starter-kit.svg?branch=master)](https://travis-ci.org/neogeek/nodejs-starter-kit)
[![Dependency Status](https://david-dm.org/neogeek/nodejs-starter-kit.svg)](https://david-dm.org/neogeek/nodejs-starter-kit)
[![devDependency Status](https://david-dm.org/neogeek/nodejs-starter-kit/dev-status.svg)](https://david-dm.org/neogeek/nodejs-starter-kit?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/neogeek/nodejs-starter-kit.svg)](https://greenkeeper.io/)

## Install to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Getting Started

Run the following command to download the repo and unpack it into `nodejs-starter-kit-master/`.

```bash
$ curl -L https://github.com/neogeek/nodejs-starter-kit/archive/master.tar.gz | tar -xz
```

All client-side files are located in `/static`.

Both client and server-side Handlebars templates are stored in `/src/views`.

## Building

The following command will install all Node.js dependencies. Once all dependencies are installed it will run `make build` compiling Handlebars and Sass files.

```bash
$ npm install
```

To manually compile Handlebars and Sass files run:

```bash
$ make build
```

To watch for changes to any Handlebars or Sass files run:

```bash
$ make watch
```

## Testing

Tests are powered by [mocha](http://mochajs.org/). To run all tests use this command:

```bash
$ npm test
```

A `.travis.yml` configuration file is included to support automated testing through [Travis CI](https://travis-ci.org).

## Server

If you have the [Heroku Toolbelt](https://toolbelt.heroku.com) installed you can start the sample applications with this command:

```bash
$ foreman start
```

If not, then the application can also be run using this command:

```bash
$ make serve
```

Once the application is running it can be accessed at <http://localhost:5000/>.

## Bash Alias

Add the following to your `~/.bash_profile` and restart terminal. You will now be able to create a new project using the starter kit by typing `create-nodejs-starter-kittest` (replacing _test_ with your new project name).

```bash
create-nodejs-starter-kit() {

    curl -L https://github.com/neogeek/nodejs-starter-kit/archive/master.tar.gz | tar -xz
    mkdir -p "${1}"
    mv nodejs-starter-kit-master/{*,.[^.]*} "${1}"
    rm -d nodejs-starter-kit-master
    cd "${1}" || exit
    npm install

}
```

## Demo

A video covering the initial setup process and basic Handlebars usage is available at Vimeo. <http://vimeo.com/neogeek/nodejs-starter-kit-demo>

[![](http://i.vimeocdn.com/video/484145719_1280.jpg)](http://vimeo.com/neogeek/nodejs-starter-kit-demo)
