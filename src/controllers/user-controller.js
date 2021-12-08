// Opretter forbindelse til de forskellige filer
const express = require("express");
const router = express.Router();
const userModel = require("./../models/user");
const db = require("./../helpers/db");

// POST-metoden
router.post("/create", (req, res) => {
  // Den respektive bruger indtastet
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user);
  // Status kode
  res.status(200).send(true);
});

// DELETE-metoden
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});

// POST-metoden
router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(401).send(false);
    }
  } else {
    res.status(404).send(false);
  }
});

// PUT-metoden
router.put("/update", (req, res) => {
  const user = {email: req.body.email, password: req.body.password, oldEmail: req.body.oldEmail};
  db.updateUser(user);
  res.status(200).send(true);
});

module.exports = router;
