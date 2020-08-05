const express = require("express");
const session = require("express-session");

const FileStore = require("session-file-store")(session);
const njk = require("nunjucks");
const path = require("path");

const app = express();

app.disable("x-powered-by");

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    name: "root",
    secret: "keyass",
    resave: true,
    logFn: () => {},
    store: new FileStore({
      path: path.resolve(__dirname, "tmp"),
    }),
    saveUninitialized: false,
  })
);

//configura da engine e o caminho padrão
njk.configure(path.resolve(__dirname, "app", "views"), {
  watch: true,
  express: app,
  autoescape: true,
});

//rota padrao de docs publico
app.use(express.static(path.resolve(__dirname, "app", "public")));

//alteração do engine de view
app.set("view engine", "njk");

app.use(require("./app/routes/routes"));

module.exports = app;
