var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    //db.Location.findAll({ where: { id: req.params.id } }).then(function(dbExamples) {
      res.render("index", 
    );
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get('/createCourt', function (req, res) {
    res.render('createCourt');
});


app.get('/createUser', function (req, res) {
  res.render('createUser');
});

app.get('/viewCourts', function (req, res) {
  res.render('viewCourts');
});


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
