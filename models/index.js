const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:1337/wikistack");

// const Page = db.define("page", {
//   title: {
//     type: Sequelize.STRING,
//   },
//   slug: {
//     type: Sequelize.STRING,
//   },
//   content: {
//     type: Sequelize.STRING,
//   },
//   status: {
//     type: Sequelize.ENUM("open", "close"),
//   },
// });

// const User = db.define("user", {
//   name: {
//     type: Sequelize.STRING,
//   },
//   email: {
//     type: Sequelize.STRING,
//   },
// });

module.exports = {
  db,
  //Page,
  //User
};
