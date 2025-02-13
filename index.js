const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.get("/sre-metrics", (req, res) => {
  res.json({ status: "I'm fine!"});
});

module.exports.handler = serverless(app); 