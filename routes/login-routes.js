var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/");
  });
};
