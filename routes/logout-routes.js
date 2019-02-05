module.exports = function(app) {
  //POST Login authentication route (uses Passport)
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};
