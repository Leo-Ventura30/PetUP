module.exports = {
  url: process.env.DATABASE_URL,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
