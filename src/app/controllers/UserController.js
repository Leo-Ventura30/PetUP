const { User } = require("../models");

class UserController {
  load(req, res) {
    return res.render("auth/signin");
  }

  // async create(req, res) {
  //   return res.redirect("/home", { message: "Usuario criado!" });
  // }
}

module.exports = new UserController();
