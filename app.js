const express = require("express");
//creating app
const app = express();
app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});
app.get("/about-us", (req, res) => {
  res.sendFile("public/about.html", { root: __dirname });
});

//app.post("/register", (req,res))
//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
