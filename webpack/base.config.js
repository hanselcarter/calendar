const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "..", "public"),
    publicPath: "/",
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: true,
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: [
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, "..", "src/components"),
      Actions: path.resolve(__dirname, "..", "src/actions"),
      calendarReduxHooks: path.resolve(
        __dirname,
        "..",
        "src/calendarReduxHooks"
      )
    }
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin(["npm_package_version"]),
    new HtmlWebpackPlugin({
      title: "Calendar",
      filename: "index.html",
      template: "index.html",
      meta: {
        charset: { charset: "UTF-8" },
        viewport: {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no"
        },
        googleSignInClient: {
          name: "google-signin-client_id",
          content:
            "844988560140-5tkiajs70naja85rmeodpk7j4qrr4sit.apps.googleusercontent.com"
        }
      }
    }),
    new CopyPlugin([
      { from: "assets/favicons", to: "assets/favicons" },
      { from: "assets/css", to: "assets/css" },
      { from: "assets/fonts", to: "assets/fonts" }
    ])
  ]
};
