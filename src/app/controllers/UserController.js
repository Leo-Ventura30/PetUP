const { User } = require("../models");

class UserController {
  load(req, res) {
    return res.render("auth/signin");
  }
  signup(req, res) {
    return res.render("auth/signup");
  }
  async create(req, res) {
    const { name, user, password } = req.body;
    const { filename: avatar } = req.file;
    const people = await User.findOne({ where: { user } });
    if (people) {
      return res.redirect("/signup");
    } else {
      await User.create({ name, user, password, avatar });
    }

    return res.redirect("/");
  }
}

module.exports = new UserController();
