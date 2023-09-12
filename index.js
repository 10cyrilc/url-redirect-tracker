const express = require("express");
const cors = require("cors");
const { trackRedirect } = require("./src/tracker");

var app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/track", async (req, res) => {
  const url = req.body.url;
  try {
    const response = await trackRedirect(url);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(3000, function () {
  console.log("App running on http://localhost:3000");
});
