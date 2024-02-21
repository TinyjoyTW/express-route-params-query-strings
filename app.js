// app.js
const express = require("express");
const logger = require("morgan");

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));

// ROUTES

// Example - Query Strings (?)
// When a user enters something in the search bar
app.get("/search", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get("/results", (req, res) => {
  console.log("req.query ->", req.query);
  res.send(req.query);
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

// Example - Route Parameters (:)
app.get("/users/:username", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get("/books/:bookId/details", (req, res) => {
  console.log("req.params ->", req.params);
  res.send(req.params);
});

// Setting multiple route parameters in a route to capture different parts of the URL dynamically
app.get("/users/:username/books/:bookId", (req, res) => {
  console.log("req.params -> ", req.params);
  res.send(req.params);
});

app.listen(3000, () => console.log("App listening on port 3000!"));
