const express = require("express");
const path = require("path");
const open = require("open");
const port = 3000;
const webpack = require("webpack");
const config = require("../webpack.config.dev.js");
console.log("this is tothrow an error");

const app = express(); //creating an instance of express

const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});
app.listen(port, err => {
  if (err) {
  } else {
    open("http://localhost:" + port);
  }
});
