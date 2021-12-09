const express = require("express");
const router = express.Router();
const varerModel = require("../models/vare");
const varerDb = require("../helpers/varerDb");

// Opret vare
router.post("/opretVarer", (req, res) => {
  const vare = new varerModel(req.body.varekategori, req.body.produkt, req.body.pris);
  varerDb.saveVare(vare);
  res.status(200).send(true);
});

// Oprettelse af flere varer
const varer2 = '/varer.json'

// Sender varer.json filen
router.get("/returner_alle_varer", (req, res) => {
  const vare = varerDb.openFile(varer2)
  res.status(200).json(vare)
  console.log(vare)
}); 

// Slet vare
router.delete("/deleteVare", (req, res) => {
  const vare = new varerModel(req.body.varekategori, req.body.produkt, req.body.pris);
  varerDb.deleteVare(vare);
  res.status(200).send(true);
});

// Opdater vare
router.put('/update', (req, res) => {
  const vare = {
    varekategori: req.body.varekategori,
    produkt: req.body.produkt,
    pris: req.body.pris,
    oldProdukt: req.body.oldProdukt
};
  varerDb.updateVare(vare);
  res.status(200).send(true);
});

module.exports = router;