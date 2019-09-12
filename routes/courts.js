var db = require("../models");

module.exports = function (app) {
    app.get("/api/courtsBySport/:sport", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        console.log(req.params.sport);
        db.Courts.findAll({
          where: {
            sport: req.params.sport
          }
        }).then(function (courts) {
          res.json(courts);
        });
      });    

      app.get("/api/courts", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Courts.findAll().then(function (courts) {
          res.json(courts);
        });
      }); 

      app.get("/api/oneCourt/:id", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
      db.Courts.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (courts) {
        console.log(courts)
          res.json(courts);
        });
      });   


      app.post("/api/courts", function (req, res) {
        db.Courts.create(req.body).then(function (dbCourts) {
          res.json(dbCourts);
        });
      });
};


