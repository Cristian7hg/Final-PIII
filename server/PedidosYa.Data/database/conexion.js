const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");

// El nombre de la base de datos debe ser recibe_ya 

// El usuario debe ser root

// La contrasena debe ser recibeya

// const sequelize = new Sequelize('recibe_ya','root','Frosty16', {
//     host:'localhost',
//     dialect:'mysql',
//     logging: false 
// });

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