path = require('path');
// TODO: Add URL-Loader.
// https://vue-loader.vuejs.org/en/configurations/asset-url.html
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
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        // http://eslint.org/docs/rules/
        options: {
          fix: true,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // https://stackoverflow.com/questions/39059426/you-may-need-an-appropriate-loader-to-handle-this-file-type-in-vue-js-project
        // Due to the vue-html-loader uses require(<resource>), need to pipe with file-loader or url-loader.
        // Size Limit. URL-Loader first, If overs limit, pipe to File-Loader
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=./src/images/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
