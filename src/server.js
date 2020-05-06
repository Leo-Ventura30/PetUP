const express = require("express");
const njk = require("nunjucks");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));

njk.configure(path.resolve(__dirname, "app", "views"), {
  watch: true,
  express: app,
  autoescape: true,
});

app.use(express.static(path.resolve(__dirname, "app", "public")));
app.set("view engine", "njk");

app.use(require("./app/routes/routes"));

module.exports = app;
