const path = require('path')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['shebang-loader', 'babel-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
}
