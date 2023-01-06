const path = require('path');
const express = require('express');
const { apiRouterCreator } = require('./apiRouterCreator.js');
const authRouter = require('./authRouter.js');
const { passportCreator } = require('./passportCreator.js');
const cors = require('cors');

const session = require('express-session'); // required for oauth session
const { SESSION_SECRET } = require('../../secrets.js');

const appCreator = function (db) {
  const app = express();

  // Hacky way to store database interface on app for later use in
  // api and auth router. There probably is a cleaner way to do this.
  // TODO: find this way
  // Also, I don't think I ever use app.db and just pass through creators. Maybe remove?
  app.db = db;

  // You don't need to use passportCreator since passport.authenticate
  // does not use any database functionality nor google oauth, but we do
  // so just for consistency with the rest of the code.
  const passport = passportCreator(db);
  // session middleware parses the oauth jwt.
  app.use(
    session({
      secret: SESSION_SECRET,
    })
  );
  app.use(passport.authenticate('session'));

  // required to parse post data
  app.use(express.json());
  app.use(express.urlencoded());

  // To get around CORS we normally set response header Access-Control-Allow-Origin --> '*'
  // For example:
  //      app.use((req, res, next) => {
  //        res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
  //        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //        res.header('Access-Control-Allow-Headers', 'Content-Type');
  //        next();
  //      });
  // However, when ussing cookies many browsers do not allow Access-Control-Allow-Origin '*'
  // Instead, we use the 'cors' npm module.
  app.use(
    cors({
      credentials: true,
      origin: true,
    })
  );

  // redirect to frontend. In production, we should serve frontend files
  app.get('/', (req, res) => {
    return res.redirect('http://localhost:3000/'); // redirect automatically sets status to 302
  });

  // routers
  app.use('/api', apiRouterCreator(db));
  // TODO: consider refactoring authRouter into a creator function. We don't db currently in authRouter,
  // but if we might in the future and it would increase code consistency
  app.use('/auth', authRouter);

  // page not fuound
  app.use('*', (req, res) => {
    return res.status(404).send('404 not found');
  });

  // global error handler
  app.use((err, req, res, next) => {
    const errTemplate = {
      message: 'unknown error occured',
      status: 500,
      location: 'unknown location',
    };
    return res.status(errObj.status).json(Object.assign(errTemplate, err));
  });

  return app;
};

module.exports = { appCreator };
