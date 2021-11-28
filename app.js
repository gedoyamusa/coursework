const express = require("express");
//creating app
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { root: __dirname });
});
app.get("/contacts", (req, res) => {
  res.render("contacts");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", (req, res) => {
  res.render("register");
});

app.get("/catalogue", (req, res) => {
  res.render("catalogue");
});
app.get("/login", (req, res) => {
  res.render("login");
});

const router = require("./routes/bantz");
app.use(router);

// app.get("/about-us", (req, res) => {
//   res.sendFile("public/about.html", { root: __dirname });
// });

//app.post("/register", (req,res))
//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

/*
Basic HTML
Basic to some CSS
Lots of JavaScript - Node.js (Server)
Algorithm and Problem Solving
Data Structure, SQL Queries
*/
