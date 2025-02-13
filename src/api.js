const express = require("express");
const os = require("os");
const serverless = require("serverless-http");
const app = express();

app.get("/sre-metrics", (req, res) => {
  const metrics = {
    time: new Date().toISOString(),
    uptime: process.uptime(),
    loadAverage: os.loadavg(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
  };
  res.json(metrics);
});

// Ensure the app listens on the correct port
const PORT = process.env.PORT || 8080;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
module.exports.handler = serverless(app); 