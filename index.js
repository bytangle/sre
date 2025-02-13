const express = require("express");
const app = express();

app.get("/sre-metrics", (req, res) => {
  res.json({ status: "I'm fine!" });
});

// Export the app for testing
module.exports = app;

// Start the server only if the file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}