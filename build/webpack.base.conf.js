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
  }
}
