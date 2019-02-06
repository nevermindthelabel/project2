var db = require("../models");

module.exports = function(app) {
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbData) {
      res.json(dbData);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });
};
