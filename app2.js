var express = require("express");
var app = express();

app.get("/players", function(req, res){
	res.write(req.params.name);
	res.end(req.params.lang);
});

var port = process.env.PORT || 3333;
app.listen(port, function(){
	console.log("Server is running on port "+port);
});