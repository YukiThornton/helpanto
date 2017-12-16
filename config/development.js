import path from 'path';
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
    })
  ],

  devServer: {
    contentBase: publicDir,
    port: 3003,
  },
}
