var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burgers.create(["burgername"], [req.body.burgername], function() {
    res.redirect("/");
  });
});

router.put("/:burgerid", function(req, res) {
  var condition = "burgerid = " + req.params.id;
  console.log("condition", condition);
  burgers.update({devoured: "true"}, condition, function() {
    res.redirect("/");
  });
});
 

// Export routes for server.js to use.
module.exports = router;