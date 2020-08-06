const { User, Schedule } = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");
class SessionController {
  //funçao para checkar se o usuario existe
  async signin(req, res) {
    let error = "";
    const { user, password } = req.body;

    const people = await User.findOne({ where: { user } });

    if (!people || !(await people.checkPassword(password))) {
      error = "Usuário ou senha incorretos.";
      return res.render("auth/signin", { error });
    }

    req.session.people = people;
    res.locals.people = people;

    return res.redirect("/dashboard/home");
  }
  async schedule(req, res) {
    const { id } = req.session.people;

    const schedules = await Schedule.findAll({
      where: {
        user_id: id,
        status: 1,
        date: {
          [Op.gte]: moment(),
        },
      },
    });

    res.locals.people.schedules = schedules.map((a) => {
      return {
        id: a.id,
        date: {
          day: moment(a.date).format("DD/MM/YYYY"),
          hour: moment(a.date).format("hh:mm"),
        },
        location: a.location,
        type: a.type,
        value: a.value,
        status: a.status,
      };
    });
    return res.redirect("/dashboard/home");
  }

  DestroyCookie(req, res) {
    req.session.destroy();
    res.clearCookie("root");
    return res.redirect("/");
  }
}

module.exports = new SessionController();
