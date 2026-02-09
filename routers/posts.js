// QUESTO FILE GESTISCE TUTTE LE ROTTE DELLA MIA APP
const express = require("express");
const router = express.Router();

// INDEX → lista di tutti i post
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

// SHOW → dettaglio di un singolo post
router.get("/:id", (req, res) => {
  res.send(`Dettaglio del post ${req.params.id}`);
});

// CREATE → creazione di un nuovo post
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// UPDATE → modifica di un post esistente
router.put("/:id", (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});

// DELETE → cancellazione di un post
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});



module.exports = router;