var path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  },

  //use babel to convert new JS to old JS
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,   //regexp saying apply only to JS files
        exclude: /node_modules/
      }
    ]
  }
}
