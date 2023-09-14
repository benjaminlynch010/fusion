const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  console.log("Getting Party");
  const queryText = `
  SELECT * FROM personas
  JOIN party ON personas.id = party.persona_id
  ORDER BY party.id ASC;`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

// POST persona to party
router.post("/add", (req, res) => {
  console.log(req.body)
  const personaID = req.body.id
  const queryText = `
  INSERT INTO party (persona_id)
  VALUES ($1);
  `
  pool.query(queryText, [personaID])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log(`Cannot add to party ${err}`);
    res.sendStatus(500);
  });
});

// DELETE persona from party
router.delete("/del/:id", (req, res) => {
  console.log(req.params.id)
  const personaID = req.params.id
  const queryText = `
  DELETE FROM party WHERE id=$1;
  `
  pool.query(queryText, [personaID])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log(`Cannot remove from party ${err}`);
    res.sendStatus(500);
  });  
})
module.exports = router;
