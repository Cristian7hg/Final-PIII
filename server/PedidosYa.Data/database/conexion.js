const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");

const dbPath = path.join(
    path.dirname(require.main.filename),
    "PedidosYa.Data",
    "database"
  );
  
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(dbPath,"PedidosYa.sqlite")
  });

module.exports = sequelize;