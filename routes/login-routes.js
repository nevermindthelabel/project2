//var db = require("../models");

module.exports = function(app) {
  //POST Login authentication route (uses Passport)
  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    })
  );
};
