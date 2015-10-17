# webpack + react.js + hot reloading

Fork of [a project by rauschma](https://github.com/rauschma/webpack-es6-demo). This project shows how to use webpack for client-side React development in ECMAScript 6.

Includes:
* hot reloading (courtesy of gaearon's [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) and [react-transform-hmr](https://github.com/gaearon/react-transform-hmr))
* [CSS Modules](http://glenmaddern.com/articles/css-modules)



## installation

* Install  [node](https://nodejs.org)
* run `npm install`

## usage

* `gulp` to start gulp in watch mode - webpack will recompile when you change a JS or LESS file.
* open `localhost:7000` in a browser.
* Change or add files in `src/js` folder. `main.js` is the entry point.
