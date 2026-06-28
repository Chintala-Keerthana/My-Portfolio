const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all projects
router.get("/", (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Add a project
router.post("/", (req, res) => {
  const { title, description, github_link, live_link, technologies } = req.body;

  const sql =
    "INSERT INTO projects (title, description, github_link, live_link, technologies) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [title, description, github_link, live_link, technologies],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({
        message: "Project Added Successfully",
      });
    }
  );
});

module.exports = router;