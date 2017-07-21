var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  name: "picogram",
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "script.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({fallback: "style-loader", use: ["css-loader", "less-loader"]})
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader:'url-loader?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
