// *** Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.
  res.render("dog", animals[0]);
});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  var yes=[];
  for (var i=0; i<animals.length; i++) {
    if (animals[i].pet===true) {
      yes.push(animals[i]);
    }
  };
      res.render("index", {group:yes});


});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.
  var no=[];
  for (var i=0; i<animals.length; i++) {
    if (animals[i].pet===false) {
      no.push(animals[i]);
    }
  };
      res.render("index", {group:no});
});

app.listen(port);
