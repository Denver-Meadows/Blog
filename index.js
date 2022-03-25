const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

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
