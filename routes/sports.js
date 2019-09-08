var db = require("../models");

module.exports = function (app) {
    app.get("/api/sports", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Sports.findAll().then(function (sports) {
          res.json(sports);
        });
      });   
      app.get("/api/oneSport/:id", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
      db.Sports.findOne({
        where: {
          id: parseInt(req.params.id)
        }
      }).then(function (sports) {
        console.log(sports)
          res.json(sports);
        });
      });   


      app.post("/api/sports", function (req, res) {
        db.Sports.create(req.body).then(function (dbSports) {
          res.json(dbSports);
        });
      });
};