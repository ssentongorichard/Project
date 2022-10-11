// DEPENDENCIES
//always the first line on top
const express = require("express");
const path = require('path')

// INSTATIATIONS
const app = express();

// CONFIGURATIONS
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));
app.set('views', './views');

// MIDDLEWARE
// app.use(express.urlencoded({ extended: true }));

// Simple request time logger
app.use((req, res, next) => {
	console.log("A new request received at " + Date.now());

	// This function call tells that more processing is
	// required for the current request and is in the next middleware
	// function/route handler.
	next();
});

//Simple request time logger for a specific route
// app.use("/about", (req, res, next) => {
// 	console.log("A new request received at " + Date.now());
// 	next();
// });

// To parse URL encoded data we use a body parser
app.use(express.urlencoded({ extended: false }));
//caters for stattic files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
//caters for the uploaded images
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))


// Routes

// For invalid routes. always the last route in the server file(index.js).
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});
// Bootstrapping Server always the last line of code in the server file(index.js).
app.listen(3000, () => console.log("We are listening on port 3000"));