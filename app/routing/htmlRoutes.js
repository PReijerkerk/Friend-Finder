//Dependencies
let path = require('path');

//Routing
module.exports = function(app) {
    app.get("*", function(req, res) {
        res.sendfile(path.join(__dirname, "../app/public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendfile(path.join(__dirname, "../app/public/survey.html"));
    });
};

