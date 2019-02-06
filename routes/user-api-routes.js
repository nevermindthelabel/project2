var db = require("../models");
//ar passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body)
      .then(function(dbData) {
        res.json(dbData);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // app.post("/api/signup", function(req, res) {
  //   console.log(req.body);
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  //     .then(function() {
  //       res.redirect(307, "/login");
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //       res.json(err);
  //       // res.status(422).json(err.errors[0].message);
  //     });
  // });

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
