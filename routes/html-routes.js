var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  //GET Route to root page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "TrafficMon!"
    });
  });
  //GET Route to display submit new user form
  app.get("/users/new", function(req, res) {
    res.render("new-user");
  });

  //GET Route to display submit new report page
  app.get("/reports/new", isAuthenticated, function(req, res) {
    res.render("new-report");
  });

  //GET Route redirecting to search landing page
  app.get("/search", function(req, res) {
    res.render("search-landing");
  });

  //GET Route to search by state
  app.get("/search/state/:state", function(req, res) {
    db.Reports.findAll({
      where: {
        state: req.params.state
      }
    }).then(function(dbData) {
      res.render("search-state", {
        reports: dbData
      });
    });
  });

  //GET Route to search by city
  app.get("/search/city/:city", function(req, res) {
    db.Reports.findAll({
      where: {
        city: req.params.city
      }
    }).then(function(dbData) {
      res.render("search-city", {
        report: dbData
      });
    });
  });

  app.get("/search/own", isAuthenticated, function(req, res) {
    db.Reports.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(dbData) {
      res.render("view-own", {
        reports: dbData
      });
    });
  });
};
