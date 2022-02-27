const express = require("express");
const port = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("*", (req, res) => {
  res.send("This route does not exist");
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
