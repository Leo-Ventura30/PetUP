// const path = require("path");
module.exports = {
  URI: process.env.DATABASE_URL,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
