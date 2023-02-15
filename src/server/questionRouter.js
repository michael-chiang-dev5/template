const express = require('express');
const router = express.Router();
const db = require('../db/dbPostgreSQL');

router.get('/questions', (req, res, next) => {
  db.getQuestions()
    .then((row) => {
      // console.log('get question:', row);
      res.status(200).json(row);
    })
    .catch((err) => {
      next({
        log: 'error getting questions',
        status: 500,
        message: { err: err },
      });
    });
});

module.exports = router;
