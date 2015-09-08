var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Hello fellow adventurer. You have ventured into Webpack land. This is
// a strange and mysterious place without law and order. To make this config
// at least partially understandable we have heavily commented what is actually
// happening in parts of this monstrosity. Have a fun read.
//
// Lastly. Brace yourself. Error messages are generally not helpful here,
// documentation is very bad, examples don't work. This is not for the faint
// of heart. Good luck!

// This is where Webpack starts crawling your dependency graph.
var entry = ['./source/index'];

// This is where your shit will be dumped once Webpack is finished with it.
var output = {
  path: path.resolve(__dirname, 'public/js'),
  filename: 'app.js'
};

// This makes sure you can `require()` files without having to supply an
// extension every time. Note that the empty string has to be supplied in
// order to resolve npm modules where no extensions is specified.
// Eg. `import React from 'react';`
var resolve = {
  extensions: ['', '.less', '.jsx', '.js']
};

/* Loaders
 * =======
 *
 * Loaders are preprocessors for your require calls. They take input and pass
 * output to the next loader. In Webpack syntax you chain loaders using '!',
 * applied from _right to left_.
 *
 * Eg: 'style-loader!css-loader!less-loader' means you first apply LESS loader,
 * then CSS loader, and finally the Style loader where the pipeline ends.
 *
 * You can also pass loaders parameters by appending a '?' after the loader
 * name.
 *
 * Eg: 'autoprefixer-loader?safe=true' means you passed the 'safe' option to
 * the autoprefixer loader.
 *
 * Note that loaders have to be installed as usual (Eg: `npm install css-loader`)
 * but you don't have to `require()` them anywhere in the config. You just pass
 * their name as a string inside the loader objects. Magic.
 *
 */

 // Explain where the files come from...


/* Loader for Styles
 * -----------------
 *
 * First, let's create a loader to preprocess our styles. It will be composed
 * from four 'sub-loaders': less, autoprefixer, css, and style loader.
 *
 * 1. The LESS loader simply transforms LESS into plain CSS
 * 2. Autoprefixer adds browser prefixes
 * 3. CSS loader ??? No idea... :(
 * 4. Style loader ??? Also not sure.
 */

var less = 'less-loader';
var autoprefixer = 'autoprefixer-loader?{browsers:["last 2 version", "ie 9", "firefox 20", "safari 6", "chrome 25"]}';
var css = 'css-loader';
var style = 'style-loader';

// Now, combining these four, you get one magical loader that can handle exactly
var styleLoader = {
  loader: style + '!' + css + '!' + autoprefixer + '!' + less,
  include: path.resolve(__dirname, 'source'),
  test: /\.less$/
}

/* Loader for Scripts
 * -----------------
 *
 * This guy is simple. You just use the Babel loader directly. This let's us
 * use all the JSX and ES6 goodness our heart desires.
 */

var scriptLoader = {
  loader: 'babel',
  include: path.resolve(__dirname, 'source'),
  test: /\.jsx$|\.js$/
};

// Export everything
module.exports = {
  entry: entry,
  output: output,
  resolve: resolve,
  module: {loaders: [scriptLoader, styleLoader]}
};
