var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Hello fellow adventurer. You have ventured into Webpack land. This is
// a strange and mysterious place without law and order. To make this config
// at least partially understandable we have heavily commented what is actually
// happening in parts of this monstrosity. Have a fun read.
//
// There are also a couple of general points you should know about:
// - loaders are not `require()`ed but have to be installed in order for this
//   contraption to function properly.
// - when specifying loaders as strings, you can use the full npm name
//   (eg: `css-loader`) or you can omit the 'loader' part.
// - you 'chain' loaders by exclamation points. So like `css!less`. The
//   Webpack documentation says you can also use an array of strings but
//   that doesn't always work with all plugins. So for the sake of consistency
//   let's just stick to this beautiful '!' convention.
//   Also, note that when chained like this, the loaders are applied
//   _right to left_. Intuitive!
//
// Lastly. Brace yourself. Error messages are generally not helpful here,
// documentation is very bad, examples don't work. This is not for the faint
// of heart. Good luck!

// This is where Webpack starts crawling your dependency graph.
var entry = ['./source/index'];

// This is where your shit will be dumped once Webpack is finished with it.
var output = {
  path: path.resolve(__dirname),
  filename: 'app.js'
};

// This makes sure you can `require()` files without having to supply an
// extension every time. Note that the empty string has to be supplied in
// order to resolve npm modules where no extensions is specified.
// Eg. `import React from 'react';`
var resolve = {
  extensions: ['', '.less', '.jsx', '.js']
};

// The Babel loader transforms all the ES6/JSX goodness.
var scripts = {
  test: /\.jsx$|\.js$/,
  include: path.resolve(__dirname, 'source'),
  loader: 'babel'
};

// This loader makes it possible to `require()` css files. The default
// behaviour of the loader is to inline the style in a <style> tag. In order
// to fix that you need the ExtractTextPlugin.

// First we need to transform the style, css, and less loaders to... umm...
// be 'extracting'? Not really sure what is happening here, or why this has
// to be supplied as two arguments (or why we need three loaders just to
// deal with LESS?). :'(

var extractingLoaders = ExtractTextPlugin.extract('style', 'css!less');

// Once supplied with the new loaders this _other_ loader handles transforming
// less files into a separate CSS file you can just <link> to.
var styles = {
  test: /\.less$/,
  include: path.resolve(__dirname, 'source'),
  loader: extractingLoaders
}

// This plugin makes it possible to extract css to a file instead
// of just inlining it. The string that is passed to the constructor function
// is a path to the file which will be created from all the style `require()`s.
var extractText = new ExtractTextPlugin('styles.css');

module.exports = {
  entry: entry,
  output: output,
  resolve: resolve,
  module: {loaders: [scripts, styles]},
  plugins: [extractText]
};
