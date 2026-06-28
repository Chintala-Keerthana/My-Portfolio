const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

const db = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Project Routes
app.use("/api/projects", projectRoutes);

// Contact Routes
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("🚀 Portfolio Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});