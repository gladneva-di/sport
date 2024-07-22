const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "./src/scripts/index.js"),
    second: path.join(__dirname, "./src/scripts/second.js"),
    gallery: path.join(__dirname, "./src/scripts/gallery.js"),
    page: path.join(__dirname, "./src/scripts/page.js"),
    welcome: path.join(__dirname, "./src/scripts/welcome.js"),
    contacts: path.join(__dirname, "./src/scripts/contacts.js"),
    sport: path.join(__dirname, "./src/scripts/sport.js"),
    football: path.join(__dirname, "./src/scripts/football.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "scripts/[name].js",
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    compress: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      chunks: ["main"],
      page: "index.html",
      template: path.join(__dirname, "./src/index.html"),
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/pages/second.html"),
      filename: "./pages/second.html",
      chunks: ["second"],
      page: "second.html",
      template: path.join(__dirname, "./src/pages/second.html"),
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/pages/gallery.html"),
      filename: "./pages/gallery.html",
      chunks: ["gallery"],
      page: "gallery.html",
      template: path.join(__dirname, "./src/pages/gallery.html"),
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/pages/page.html"),
      filename: "./pages/page.html",
      chunks: ["page"],
      page: "page.html",
      template: path.join(__dirname, "./src/pages/page.html"),
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/pages/welcome.html"),
      filename: "./pages/welcome.html",
      chunks: ["welcome"],
      page: "welcome.html",
      template: path.join(__dirname, "./src/pages/welcome.html"),
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/page/contacts.html"),
      filename: "./pages/contacts.html",
      chunks: ["contacts"],
      page: "contacts.html",
      template: path.join(__dirname, "./src/pages/contacts.html"),
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/page/sport.html"),
      filename: "./pages/sport.html",
      chunks: ["sport"],
      page: "sport.html",
      template: path.join(__dirname, "./src/pages/sport.html"),
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/page/football.html"),
      filename: "./pages/football.html",
      chunks: ["football"],
      page: "football.html",
      template: path.join(__dirname, "./src/pages/football.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),

    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      images: path.resolve(__dirname, "src/assets/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
