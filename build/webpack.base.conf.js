const path = require('path');
// absolute directory
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'index.js'
  },
  resolve: {
    // enable users to leave off the extension when importing
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test')],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
