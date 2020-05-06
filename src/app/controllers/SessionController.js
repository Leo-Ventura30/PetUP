const { User } = require("../models");

class SessionController {
  async signin(req, res) {
    const { user, password } = req.body;

    const people = await User.findOne({ where: { user } });

    if (!people) {
      return res.redirect("/home");
    }
    if (!(await people.checkPassword(password))) {
      return res.redirect("/home");
    }
    return res.redirect("/dashboard/home");
  }
}

module.exports = new SessionController();
