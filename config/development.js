import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const srcDir = path.resolve(__dirname, '../src');
const publicDir = path.resolve(__dirname, '../public');

export default {
  entry: srcDir + '/index.jsx',

  output: {
    path: publicDir,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.jsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: publicDir + '/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      RECIPE_SERVER_URL: JSON.stringify(process.env.RECIPE_SERVER_URL),
    }),
  ],

  devServer: {
    contentBase: publicDir,
    host: '0.0.0.0',
    port: process.env.PORT,
  },
}
