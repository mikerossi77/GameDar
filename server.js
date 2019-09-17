// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config();
var express = require("express");
var jwt = require('express-jwt');
var authRoutes = require('./routes/authentication/authentication.routes');
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var auth = jwt({
  secret: process.env.JWT_SECRET
})

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
app.use('/auth', authRoutes);
require("./routes/html-routes.js")(app);
app.use(auth);
require("./routes/courts.js")(app);
require("./routes/courtStatus.js")(app);
require("./routes/users.js")(app);
require("./routes/sports.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: process.env.NODE_ENV === 'development' }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
