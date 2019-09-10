var db = require("../models");

module.exports = function (app) {
    app.get("/api/users", function (req, res) {
        db.Users.findAll().then(function (users) {
            res.json(users);
        });
    });
    app.get("/api/oneUser:id", function (req, res) {
        db.Users.findOne().then(function (user) {
            res.json(user);
        });
    });

    app.get("/api/oneUser/:id", function (req, res) {
        db.Users.findOne({
            where: {
                id: parseInt(req.params.id)
            }
        }).then(function (users) {
            res.json(users);
        });
    });

    app.post("/api/users", function (req, res) {
        db.Users.create(req.body).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });
};