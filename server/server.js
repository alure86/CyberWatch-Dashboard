const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS, JS, Images)
app.use(express.static("public"));

const PORT = 3000;

// Homepage Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Start Server
app.listen(PORT, () => {
    console.log(`CyberWatch running on port ${PORT}`);
});