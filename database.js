const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cloud-db", "user", "pass", {
    dialect: "sqlite",
    host: "./dev.sqlite"
})

module.exports = sequelize