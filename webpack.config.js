const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports={
    entry:'./app.js',
    output:{
        filename:'bundle.js',
    },
    devServer:{
      index:'index.html',
    },
    watch:true,
  module: {
    
    rules: [
      {
      test: /\.scss$/,
      use: [{ loader: "style-loader" }, 
            { loader: "css-loader" }, 
           {  loader: "sass-loader",  options: { includePaths: []  } }
          ]
      }, 
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
       {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader",
      }
    ]
    },

  plugins: [
    new LiveReloadPlugin({}),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
      }),
  ]
}