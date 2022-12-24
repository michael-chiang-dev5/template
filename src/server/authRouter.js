const { createNextState } = require('@reduxjs/toolkit');
const express = require('express');
const router = express.Router();
require('./auth.js');
const { passport } = require('./auth.js');

router.get('/user', (req, res) => {
  // req.user is the parsed jwt containing user information
  console.log('user info', req.user);
  res.status(200).json(req.user ? req.user : null);
});

// When client accesses endpoint /google, backend will do request to google
// authentication server. You need to enable google oauth authentication and
// set up client ID /secret. In addition, you must set callback url to
// /google/callback
router.get('/google', passport.authenticate('google', { scope: ['email'] }));

// Callback url. While setting up oauth authentication, you must set callback
// url to /google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/failure',
  }),
  (req, res) => {
    return res.redirect('/');
  }
);

router.get('/failure', (request, response) => {
  response.status(500).send('authentication failed...');
});
// TODO: add comments about login, logout being set by passport
// https://www.passportjs.org/concepts/authentication/login/
router.get('/logout', (request, response) => {
  request.logout(() => {
    // https://stackoverflow.com/questions/72336177/error-reqlogout-requires-a-callback-function
    console.log('logging out');
    request.session.destroy(); // destroy cookie?
    response.redirect('/');
  });
});

module.exports = router;
