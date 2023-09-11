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
  SELECT * FROM personas
  ORDER BY personas.name ASC;
  `
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows)
  })
  .catch((error) => {
    res.sendStatus(500)
  })
});

router.get('/fusion/', (req, res) => {
  // GET route code here
  const { arcanaResult, levelResult } = req.query;
  console.log('at server', levelResult)
  const params = [arcanaResult, levelResult]
  const queryText = `
  SELECT * FROM personas
  WHERE race=$1
  AND lvl >= $2
  LIMIT 1;
  `
  pool.query(queryText, params)
  .then((result) => {
    console.log('Result: ', result.rows)
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
