const express = require("express");
const session = require("express-session");

const njk = require("nunjucks");
const path = require("path");
const routes = require("./app/routes/routes");
const app = express();
var memjs = require("memjs");
var memCachedStore = require("connect-memjs")(session);
app.disable("x-powered-by");

app.use(express.urlencoded({ extended: false }));

memjs.Client.create(process.env.MEMCACHIER_SERVERS, {
  failover: true,
  timeOut: 1,
  keepAlive: true,
});
app.use(
  session({
    secret: "MyPetUP-Session-generate",
    resave: false,
    store: new memCachedStore({
      servers: [process.env.MEMCACHIER_SERVERS],
      prefix: "_session_",
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

app.use("/", routes);

module.exports = app;
