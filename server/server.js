const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS, JavaScript, Images)
app.use(express.static("public"));

const PORT = 3000;

// Dashboard (Homepage)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Login Page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
});

// Start Server
app.listen(PORT, () => {
    console.log(`CyberWatch running on port ${PORT}`);
});