var db = require("../models");

module.exports = function(app) {
  app.get("/api/courtStatus", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Court
    db.courtStatus.findAll({
      
    }).then(function(dbCourtStatus) {
      res.json(dbCourtStatus);
    });
  });

  app.get("/api/oneCourtStatus/:id", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
  db.courtStatus.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbCourtStatus) {
      res.json(dbCourtStatus);
    });
  });   

  app.post("/api/courtStatus", function(req, res) {
    db.courtStatus.create(req.body).then(function(dbCourtStatus) {
      res.json(dbCourtStatus);
    });
  });

};
