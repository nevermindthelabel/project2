var db = require("../models");

module.exports = function(app) {
  //GET Route to root page
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
  app.get("/users/new", function(req, res) {
    res.render("new-user");
  });
  app.get("/reports/new", function(req, res) {
    db.Reports.findAll({
      include: [db.Users]
    }).then(function(dbData) {
      res.render("new-report", {
        reports: dbData
      });
    });
  });
  //GET Route to search by state
  app.get("/search/state/:state", function(req, res) {
    db.Reports.findAll({
      where: {
        state: req.params.state
      },
      include: [db.Users]
    }).then(function(dbData) {
      res.render("sort-state", {
        reports: dbData
      });
    });
  });

  //GET Route to search by city
  app.get("/search/city/:city", function(req, res) {
    db.Reports.findAll({
      where: {
        city: req.params.state
      },
      include: [db.User]
    }).then(function(dbData) {
      res.render("sort-city", {
        reports: dbData
      });
    });
  });
};
