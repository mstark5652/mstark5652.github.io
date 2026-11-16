const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env, argv) => {
  const production = argv.mode === "production"

  return {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "build/",
      filename: "bundle.js",
      // md5 keeps image filenames stable (index.html's og:image references one)
      hashFunction: "md5",
      hashDigestLength: 32,
      clean: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".scss"],
    },
    devtool: production ? false : "source-map",
    plugins: [new MiniCssExtractPlugin({ filename: "bundle.css" })],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          type: "asset/resource",
          generator: { filename: "img/[contenthash][ext]" },
        },
        {
          test: /\.jsx?$/,
          include: path.resolve(__dirname, "src"),
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    },
    performance: {
      hints: false,
    },
    devServer: {
      port: 3001,
      static: { directory: __dirname, watch: false },
      devMiddleware: { publicPath: "/build/" },
    },
  }
}
