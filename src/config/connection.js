const path = require("path");
module.exports = {
  dialect: "postgres",
  host: "192.168.15.32",
  username: "postgres",
  password: "2585Leo",
  database: "postgres",
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
