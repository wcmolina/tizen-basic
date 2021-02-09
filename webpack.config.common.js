const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Important: 'projectName' has to match the name (-n flag) specified in the "tizen:create" script in package.json
const projectName = "Project";
const projectPath = `./tizen/${projectName}`;

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, projectPath),
    filename: "js/main.js",
  },
  devServer: {
    contentBase: projectPath,
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
};
