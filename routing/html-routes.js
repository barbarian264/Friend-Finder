var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/friendfinder.html"));
  });

  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/Form.html"));
  });


};