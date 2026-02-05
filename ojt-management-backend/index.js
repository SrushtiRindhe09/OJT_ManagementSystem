const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// enable CORS
app.use(cors());

// read JSON body
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Backend is running");
});

app.post("/apply", function (req, res) {
  const companyName = req.body.company;

  res.json({
    message: "Applied for OJT at " + companyName
  });
});

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});
