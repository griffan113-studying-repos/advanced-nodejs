const express = require("express");
const app = express();

function work(duration) {
  const start = Date.now();

  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  work(5000);
  res.send("Hello World");
});

const port = 3000;

app.listen(port, () => console.log("Running:"));
