const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  name: { type: Sequelize.STRING, field: "user_name" },
  email: { type: Sequelize.STRING, field: "email" },
  age: { type: Sequelize.INTEGER, field: "age" }
});

module.exports = User;
