# Notes on design decisions

## Not using a proxy

This template runs the frontend on 3000 and the backend on 8080. Usually, people set up a proxy for the dev server so that both the frontend and backend run on 8080. We separate frontend/backend ports so that it is easier to extend this template to a microservices architecture, where you have multiple backends running on different ports.

## Wrapping app in a creator function

Note that app, passport are created dynamically with creator functions rather than the usual way of directly instantiating an express app / passport. The reason for this is increased modularity; dynamic creation of app gives us the ability to plug in different databases.

Note that most express tutorials create a single server.js file that creates the server. We instead create the server dynamically using appCreator and set the listener, database in server.js. This has the advantage of increased modularity; you can initialize servers with different database which is useful for testing.

## Supertest

There are two possible strategies to test the backend.

1. Initialize and teardown the server prior to running tests, listening to port 8081. Run all tests on the same server instance.
2. Initialize a different server for each test. These servers are passed directly to supertest's `request` and do not listen to any ports.

I have implemented (2) because it allows for greater modularity of tests. If tests affect the state of the server, then testing order could affect test outcomes.

## Tests on the database

Running unit tests on the database presents several challenges:

1. Database tests should be performed on a disposable test database rather than a production (or even dev) database.

2. Tests are run asynchronously, so different tests should run on different databases in order to prevent collisions.

## .env and secrets.js

You can store environment variables in either `.env` or `secrets.js`. Each method comes with advantages and disadvantages:

The advantage of .env is:

- You can specify .env variables when running bash scripts. This because important during testing, when we want to switch from `MODE=dev` to `MODE=test` on the fly without editing secrets.js

The advantage of `secrets.js` is:

- You can do logic such as concatenating a password to a URI.
- You can declare non-string variables (bools, functions, etc.)

When using .env, to access `process.env` you will need the following:
`require('dotenv').config();`

# Miscellaneous

- The extend-expect module is a part of @testing-library/jest-dom that extends `expect` with custom matchers automatically so you don't have to import them separately.

## mocking static assets

https://stephencharlesweiss.com/jest-handling-static-assets-mocks

## Babel

For more information on babel setup: https://www.robinwieruch.de/minimal-node-js-babel-setup/

Babel is required to enable uncoming javascript features in node (such as import), as well as browser transpilation (typescript, etc.)

Babel configuration is done within ".babelrc" instead of package.json because this is considered best practice (reasons below):

- .babelrc is specific to babel and reduces clutter in package.json. Imagine doing webpack, ESLint, Babel configuration all within package.json and how difficult it would be to read.
- .babel is more modular and makes it easier to share Babel configurations

## Webpack

For more information on webpack setup: https://www.robinwieruch.de/webpack-setup-tutorial/

I decided on webpack over vite. Why?
