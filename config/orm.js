
// IMPORTING connection.js

var connection = require("./connection.js");

// Helper function for SQL syntax per classwork.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

//ORM
var orm = {
//select...()
	//ALL
		selectburgers: function(callback) {
			var c_selectALL="SELECT * FROM burgers";
			connection.query(c_selectALL, function(err, result) {
				callback(result);
			});
		},
	//ALL
		selectburgersT: function(callback) {
			var c_selectTrue="SELECT * FROM burgers WHERE devoured=TRUE";
			connection.query(c_selectTRUE, function(err, result) {
				callback(result);
			});
		},
	//ALL
		selectburgersF: function(callback) {
			var c_selectFalse="SELECT * FROM burgers WHERE devoured=FALSE";
			connection.query(c_selectFALSE, function(err, result) {
				callback(result);
			});
		},

//insertOne()
	insertburgers: function(callback) {
		var c_insert = "INSERT INTO burgers (burgername) VALUES (?) ";
		connection.query(c_insert, [burger.burgername] ,function(err, result) {
			callback(result);
		});
	 },

//updateOne()
	updateburgers: function(callback) {
		var c_update = "UPDATE burgers SET devoured= TRUE WHERE burgerid=?";
		connection.query(c_update, [burger.burgerid] ,function(err, result) {
			callback(result);
		});
	 },
}
//EXPORTING module
module.exports = orm;