/* eslint linebreak-style: ["error", "windows"] */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './angular_apps/createAccountApp/src/polyfills.ts',
    'vendor': './angular_apps/createAccountApp/src/vendor.ts',
    'app': './angular_apps/createAccountApp/src/main.ts',
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        // loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        
        // below syntax is ffrom here:
        // 'https://github.com/s-panferov/awesome-typescript-loader/issues/412'
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: './angular_apps/createAccountApp/src/tsconfig.json',
          }
        }, {
          loader: 'angular2-template-loader'
        }]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader',
      }
    ],
    noParse: /clarity-icons\.min\.js/,
    
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: './angular_apps/createAccountApp/src/index.html',
    }),
  ],
};

console.log(helpers.root('src', 'app'));