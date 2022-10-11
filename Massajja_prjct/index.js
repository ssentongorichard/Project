// Dependencies
const express = require("express");
const path = require('path')

// Instantiations
const app = express();

// Configurations
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));
app.set('views', './views');

// Middleware
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
app.delete("/about", (req, res) => {
	res.send("You have deleted something");
});

app.post("/signup", (req, res) => {
	res.send("You have registered a user");
});

app.get("/first", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/quotes", (req, res) => {
  res.sendFile(__dirname + "/quotes.html");
});

app.post("/quotes", (req, res) => {
  console.log(req.body);
  res.redirect("/about");
});


//put request. a route used for updating
app.put("/home", (req, res) => {
	res.send("You have changed me");
});

app.get("/", (req, res) => {
	// new
	res.send("Homepage! Hello world.");
});

app.get("/about", (req, res) => {
	// new
	res.send("About page. Nice.");
});
app.get("/books/:bookId", (req, res) => {
	res.send(req.params);
});
//getting a form and posting data
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
  
app.get("/login", (req, res) => {
	res.render("AOficcerform");
});
  
  app.post("/login", (req, res) => {
	console.log(req.body);
	res.redirect("/login");
});
  

// path parameters
app.get('/users/:name', (req, res)=> {
	res.send('Hello' + req.params.name)
  })
//query parameters
app.get("/queryparams", (req, res) => {
	res.send(
	  "My query params are: " + req.query.class + " and " + req.query.cohort
	);
  });
  //
  app.get("/register", (req, res) => {
	res.render('registration');
});
  
  app.post("/register", (req, res) => {
	console.log(req.body);
	res.redirect("/");
});
  
  
  

// For invalid routes. always the last route in the server file(index.js).
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});
// Bootstrapping Server always the last line of code in the server file(index.js).
app.listen(3000, () => console.log("We are listening on port 3000"));