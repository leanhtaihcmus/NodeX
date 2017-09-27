var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "eraevn",
	password: "eraevn@123",
	database: "eravn"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});