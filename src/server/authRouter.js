const express = require('express');
const { passportCreator } = require('./passportCreator.js');
const { DEBUG } = require('../../secrets.js');

const router = express.Router();
const passport = passportCreator();

router.get('/user', (req, res) => {
  // req.user is the parsed jwt containing user information
  // It is inconvenient to debug when authentication is required
  // since you have to repeatedly log in to test a feature. Setting
  // DEBUG to true automatically logs you in with a dummy user
  if (DEBUG) {
    req.user = {
      _id: 4,
      sub: '114622580175644930120',
      picture: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
      email: 'michael.chiang.dev5@gmail.com',
      email_verified: true,
    };
  }
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
