const http = require("http");
const express = require("express");
const app = express();

//Cors
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', (req, res) => {
	res.send({'das':'das'});
});

app.listen(9000, () => {
	console.log("started");
});

