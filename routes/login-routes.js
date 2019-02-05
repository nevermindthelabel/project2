var passport = require("../config/passport");

module.exports = function(app) {
  //POST Login authentication route (uses Passport)
  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/",
      failureFlash: true
    })
  );
};
