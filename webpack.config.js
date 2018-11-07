const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const buildDir = './dist';
const ROOT = path.resolve(__dirname, '..');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
  mode: 'development',
  entry: {
    'app': [
      './src/index'
    ]
  },
  output: {
    path: path.resolve(ROOT, buildDir),
    filename: '[name].js',
    publicPath: '/',
    globalObject: 'this'
  },
  devServer: {
    port: PORT,
    host: HOST,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            'presets': [['@babel/preset-env', {'modules': false}], '@babel/preset-react'],
            'plugins': [
              'react-hot-loader/babel',
            ]
          }
        }]
      }
    ],
  },
  resolve: {
    modules: [
      path.resolve(ROOT, 'client/src'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebPackPlugin({
      template: 'src/index.ejs',
      inject: 'body'
    })
  ],
  node: {
    fs: 'empty'
  }
};
