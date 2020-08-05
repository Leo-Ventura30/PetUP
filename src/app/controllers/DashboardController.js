const { User, Schedule } = require("../models");
const moment = require("moment");
class DashboardController {
  async create(req, res) {
    const { name, avatar } = res.locals.people;
    let firstName = name.split(" ");
    res.locals.people.name = firstName[0];

    return res.render("dashboard", { name: firstName[0], avatar });
  }
  async index(req, res) {
    const { id, name, avatar } = res.locals.people;
    const date = await Schedule.findAll({ where: id });
    console.log(date);
    return res.render("dashboard", { name, avatar });
  }

  async updateImage(req, res) {
    const { id, name } = res.locals.people;
    const { filename: avatar } = req.file;
    res.locals.people.avatar = avatar;
    req.session.people.avatar = avatar;

    await User.update({ avatar }, { where: { id } });

    return res.render("dashboard", { name, avatar });
  }
}

module.exports = new DashboardController();
