const { User } = require("../models");

class UserController {
  load(req, res) {
    return res.render("auth/signin");
  }
  signup(req, res) {
    return res.render("auth/signup");
  }
  async create(req, res) {
    const { user } = req.body;
    const people = await User.findOne({ where: { user } });
    if (people) {
      return res.redirect("/signup");
    } else {
      await User.create(req.body);
    }

    return res.redirect("/");
  }
}

module.exports = new UserController();
