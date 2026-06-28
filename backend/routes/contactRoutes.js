const express = require("express");
const router = express.Router();
const db = require("../config/db");

// POST /contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database Error" });
    }

    res.json({
      success: true,
      message: "Message Sent Successfully",
    });
  });
});

module.exports = router;