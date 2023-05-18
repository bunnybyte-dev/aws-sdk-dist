const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: [path.join(__dirname, "bundle.js")],
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'aws-sdk.js'
  },
  resolve:{
    fallback: { path: require.resolve("path-browserify")}
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    })],
  },
};