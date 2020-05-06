const express = require("express");

const routes = express.Router();

const UserController = require("../controllers/UserController");
const SessionController = require("../controllers/SessionController");

routes.get("/home", UserController.load);
routes.get("/dashboard/home", (req, res) => {
  res.send("Dash");
});

routes.post("/signin", SessionController.signin);
// routes.post("/home/user", UserController.create);

module.exports = routes;
