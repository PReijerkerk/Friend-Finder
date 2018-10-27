//Load Data
let friendsData = require("../data/friends");

//Routing
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        //friendsData.push(req.body);
        //res.json(true);
        let user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }


        let bffIndex = 0;
        let maxDifference = 40;

        for (var i = 0; i < friendsData.length; i++) {
            let totalDifference = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                let difference = Math.abs(user.scores[j] - friendsData[i].scores[j]);
                totalDifference += difference;
            }

            if(totalDifference < maxDifference) {
                bffIndex = i;
                maxDifference = totalDifference;
            }
        }
        
        friendsData.push(user);

        res.json(friendsData[bffIndex]);
    });
};