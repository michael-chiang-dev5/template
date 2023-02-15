const express = require('express');
const router = express.Router();
const db = require('../db/dbPostgresql');

router.get('/questions', (req, res, next) => {
  try {
    const row = db.getQuestions();
    console.log('get question:', row);
    res.status(200).json(row);
  } catch (err) {
    next({
      log: 'error getting questions',
      status: 500,
      message: { err: err },
    });
  }
});

module.exports = router;
