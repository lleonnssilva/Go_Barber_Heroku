"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const db = {};

//Produção
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   protocol: "postgres",
//   dialectOptions: {
//     ssl: true
//   }
// });

//Homologação
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "127.0.0.1",
  username: "postgres",
  password: "postgres",
  database: "go_barber",
  operationAliases: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }
});

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

//heroku login
//heroku create apipostgresleo
//git add .
//git commit -m 'Primeiro commit'
//git push heroku master
//heroku addons:create heroku-postgresql --version 11
