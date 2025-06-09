const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("short"));

app.use("/mfe/welcome", express.static(path.join(__dirname, "/welcome/dist")));
app.use("/mfe/music", express.static(path.join(__dirname, "music/build")));
app.use("/", express.static(path.join(__dirname, "bootstrap/dist")));

app.use(function (req, res) {
  res.status(404);
  res.send("File not found!");
});

app.listen(3000, function () {
  console.log("App started on port 3000");
});
