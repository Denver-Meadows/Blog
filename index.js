const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

// connecting mongo with mongoose *no longer need to pass in options like with inventory and camp-review apps
const dbURL = process.env.DB_URL || "mongodb://localhost:27017/blog";
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Mongoose Error");
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("*", (req, res) => {
  res.send("This route does not exist");
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
