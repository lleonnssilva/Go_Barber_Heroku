var models = require("./app/models");
const server = require("./server");
models.sequelize.sync({ force: true }).then(function() {
  server.listen(process.env.PORT || 3000);
});
