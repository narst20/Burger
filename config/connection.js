//*****DEPENDENCIES
var mysql = require("mysql");

//*****MYSQL information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Learn2day!",
  database: "burgers_db"
});

//*****Connecting to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//*****Exporting connection
module.exports = connection;
