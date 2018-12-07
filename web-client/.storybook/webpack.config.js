const path = require('path');
const include = path.resolve(__dirname, '../src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
        exclude: /node_modules/,
        include,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};
