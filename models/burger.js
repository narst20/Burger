
// IMPORTING orm.js

var orm = require("../config/orm.js");

burgers =  {
  all: function(callback) {
		orm.selectburgers("burgers", function(results) {
			callback(results);
		});
	},
  alltrue: function(callback) {
		orm.selectburgersT("burgers", function(results) {
			callback(results);
		});
	},
  allfalse: function(callback) {
		orm.selectburgersF("burgers", function(results) {
			callback(results);
		});
	},

// POST routes
  insertnew: function(columns, values, callback) {
		orm.insertburgers("burgers", columns, values, function(results) {
			callback(results);
		});
	},

 
// PUT routes
  updateburger: function(objColVals, condition, callback) {
    orm.updateburgers("burgers", objColVals, condition, function(results) {
 			callback(results);
		});
	}
};

module.exports = burgers;
