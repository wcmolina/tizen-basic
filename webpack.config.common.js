const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => ({
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, `/tizen/${env.PROJECT_NAME}`),
    filename: "js/main.js",
  },
  devServer: {
    contentBase: `./tizen/${env.PROJECT_NAME}`,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve("./index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
});
