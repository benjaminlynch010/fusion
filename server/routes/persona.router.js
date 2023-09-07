const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('Getting Persona List')
  const queryText = `
  SELECT personas.name, personas.race, personas.lvl FROM personas
  JOIN party ON personas.id = party.persona_id
  ORDER BY personas.lvl ASC;
  `
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows)
  })
  .catch((error) => {
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here

});

module.exports = router;
