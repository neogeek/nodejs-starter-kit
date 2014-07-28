#Node.js Starter Kit

> This repo is a starter kit for working with [Node.js](http://nodejs.org), [Handlebars](http://handlebarsjs.com) (both server and client side), [SASS](http://sass-lang.com) (through [Stylus](http://learnboost.github.io/stylus/)), and [RequireJS](http://requirejs.org). Client-side dependency management is through [Bower](http://bower.io). 

##Getting Started

Run the following command to download the repo and unpack it into `/nodejs-starter-kit`.

```bash
$ curl -L https://github.com/neogeek/nodejs-starter-kit/archive/master.tar.gz | tar -xz
```

##Files

All client-side files are located in `/static`. Bower components and compiled client-side Handlebars templates generated through `grunt` are also stored here.

Server-side Handlebars templates are stored in `/src/views`.

##Building

###Installing Dependencies

The following command will install all Node.js and Bower dependencies. Once all dependencies are installed it will run `grunt` compiling Handlebars and SASS files.

```bash
$ npm install
```

To manually compile Handlebars and SASS files run:

```bash
$ grunt
```

To watch for changes to any Handlebars or SASS files run:

```bash
$ grunt watch
```

##Running Server

If you have the [Heroku Toolbelt](https://toolbelt.heroku.com) installed you can start the sample applications with this command:

```bash
$ foreman start
```

If not, then the application can also be run using this command:

```bash
$ node web.js
```

Once the application is running you can access it at <http://localhost:5000/>.
