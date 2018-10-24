//Dependencies
let express = require("express");

//Communicates with node that a "Express" server is being created
let app = express();

//Sets up the initial port using 3000 as localhost or setting value to the port assigned by heroku
let PORT = process.env.PORT || 3000;

//Sets up the "Express" server to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Points the server to the route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});