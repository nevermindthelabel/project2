var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Reports.findAll({
      include: [db.Users]
    }).then(function(dbData) {
      res.render("index", {
        msg: "Welcome!",
        reports: dbData
      });
    });
  });

  app.get("/sort/state", function(req, res){
    db.Reports.findAll({
      where: {
        state: req.body.state
      },
      include: [db.Users]
    }).then(function(dbData){
      res.render("sort-state", {
        reports: dbData
      })
    })
  })
};
