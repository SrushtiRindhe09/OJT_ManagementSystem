const express = require("express");

const app = express();
const PORT = 5000;

// simple test route
app.get("/", function (req, res) {
  res.send("Backend is running");
});

// apply OJT route
app.post("/apply", function (req, res) {
  res.send("OJT application received");
});

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});
