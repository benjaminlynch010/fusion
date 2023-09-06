const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  router.get('/', (req, res) => {
    // GET route code here
    console.log('Getting Party List')
    const queryText = `
    SELECT * FROM party
    ` 
    // JOIN ON user.id WHERE party.user_id = user.id
    pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      res.sendStatus(500)
    })
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
