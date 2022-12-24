const db = require('../db/db.js');
const express = require('express');
const router = express.Router();

router.post('/db', async (req, res) => {
  const rn = await db.getCards();
  res.status(200).send(rn);
});

module.exports = router;
