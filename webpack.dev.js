const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: "file-loader",
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          {
            loader: "resolve-url-loader",
            options: { root: path.resolve(__dirname, "./src/assets/images/") },
          },
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              sourceMap: true,
              sourceMapContents: false,
              resources: [
                "./src/assets/scss/variables.scss",
                "./src/assets/scss/mixins.scss",
                "./src/assets/scss/*.scss",
              ],
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
});
