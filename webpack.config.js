const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
    },
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html'
      })
    ],
    devServer: {
      writeToDisk: true
    },
};