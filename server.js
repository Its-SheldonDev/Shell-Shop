var express = require("express");
var app = express();
var PORT = process.env.port || 2704;
var sus = require("./sus");
require('./stripe/stripe.js')


app.use(sus.logger);

app.use(express.static(__dirname + "/public"));
console.log("Dossier Shop : " + __dirname);

app.listen(PORT, function() {
	console.log("Shell Shop lancé sur le port : " + PORT + " !");
});