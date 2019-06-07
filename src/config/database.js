// module.exports = {
//   // dialect: "postgres",
//   // host: "127.0.0.1",
//   // username: "postgres",
//   // password: "postgres",
//   // database: "go_barber",
//   // operationAliases: false,
//   // define: {
//   //   timestamp: true,
//   //   underscored: true,
//   //   underscoredAll: true
//   // }

//   dialect: "postgres",
//   protocol: "postgres",
//   dialectOptions: {
//     ssl: true
//   }
// };
const fs = require("fs");

module.exports = {
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: true
    }
  }
};
