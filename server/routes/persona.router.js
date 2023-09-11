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

router.post('/fusion/', (req, res) => {
  // GET route code here
  console.log('fusing in db, req.body: ', req.body)
  
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
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here

});

module.exports = router;
