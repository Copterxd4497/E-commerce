const express = require("express");

const path = require("path");
const homePageRoute = require("./routes/homePageRoute");

const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

//Middleware for receive user's input
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homePageRoute);

module.exports = app;
