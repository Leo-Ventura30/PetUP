const { User, Schedule } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");
class DashboardController {
  async create(req, res) {
    const { id, name, avatar } = res.locals.people;
    let firstName = name.split(" ");
    res.locals.people.name = firstName[0];
    var actualDate = moment().toDate();

    const schedules = await Schedule.findAll({
      where: {
        user_id: id,
        date: { [Op.gte]: actualDate },
        status: 1,
      },
      order: [["date", "ASC"]],
    });
    const sched = schedules.map((a) => {
      return {
        id: a.id,
        date: {
          day: moment(a.date).format("DD/MM/YYYY"),
          hour: moment(a.date).format("HH:mm"),
        },
        location: a.location,
        type: a.type,
        value: a.value,
        status: a.status,
        dog: a.dog,
      };
    });
    const stats = ["Fechado", "Aberto", "Remarcado"];
    return res.render("home/dashboardHome", {
      name: firstName[0],
      avatar,
      sched,
      stats,
    });
  }

  async updateImage(req, res) {
    const { id, name, ...rest } = res.locals.people;
    const { filename: avatar } = req.file;
    res.locals.people.avatar = avatar;
    req.session.people.avatar = avatar;
    console.log(rest);
    await User.update({ avatar }, { where: { id } });

    return res.render("home/dashboardHome", { name, avatar });
  }
}

module.exports = new DashboardController();
