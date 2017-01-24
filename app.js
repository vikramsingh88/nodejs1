var express = require("express");
var app = express();

app.get("/players", function(req, res){
	var query = req.query;
	console.log("Query value "+JSON.stringify(query));
});

var port = process.env.PORT || 3333;
app.listen(port, function(){
	console.log("Server is running on port "+port);
});