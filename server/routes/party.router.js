const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET Party
router.get("/", rejectUnauthenticated, (req, res) => {
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
router.post("/add", rejectUnauthenticated, (req, res) => {
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
router.delete("/del/:id", rejectUnauthenticated, (req, res) => {
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

router.delete('/clear', rejectUnauthenticated, (req, res) => {
  const queryText = `
  DELETE FROM party
  `
  pool.query(queryText)
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Cannot clear party.', err)
    res.sendStatus(500)
  })
})

router.put('/change-name/', rejectUnauthenticated, (req, res) => {
  const partyName = req.body.heading
  const queryText = `
  UPDATE party
  SET party_name = $1
  `
  pool.query(queryText, [partyName])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    res.sendStatus(500)
  })
})
module.exports = router;
