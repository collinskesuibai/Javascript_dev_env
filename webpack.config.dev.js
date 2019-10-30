// const path = require("path");

// module.exports = {
//   debug: true,
//   devtool: "inline-source-map",
//   noInfo: false,
//   entry: [path.resolve(__dirname, "./src/index")],
//   target: "web",
//   output: {
//     path: path.resolve(__dirname, "src"),
//     publicPath: "/",
//     filename: "bundle.js"
//   }
// };
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  target: "web",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
