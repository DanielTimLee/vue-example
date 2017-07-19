path = require("path");

module.exports = {
  entry: './app/src/main.js',
  output: {
    path: path.resolve(__dirname, './app/src/'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            "scss": "vue-style-loader!css-loader!sass-loader",
            "sass": "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        // https://stackoverflow.com/questions/39059426/you-may-need-an-appropriate-loader-to-handle-this-file-type-in-vue-js-project
        // Due to the vue-html-loader uses require(<resource>), need to pipe with file-loader or url-loader.
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=./images/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
