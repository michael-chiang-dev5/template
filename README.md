# TODO

- add in console logging of actual sql commands
  - consider refactorying pool into db.query
- add in dotenv with prod, test, dev
- Add in testing
  - Talk about mocha vs jest for mongoose

# Description

This is a template project. It implements a minimal React frontend with Redux, express backend, postgresql database interface, and OAuth authentication.

Start the frontend with `npm run frontend`
Start the backend with `npm run backend`

# Notes on creation

The following section contains step-by-step instructions to re-create this repository from scratch.

---

## Install npm dependencies

Initialize package.json with the following command:

```
$ npm init -y
```

Install the following dependencies with `$ npm install <DEV_DEPENDENCIES> --save-dev`

- nodemon
- react
- react-dom

Install the following devDependencies with `$ npm install <DEV_DEPENDENCIES> --save-dev`. Note that devDependencies differ from regular dependencies in that they are only loaded in the dev build.

- @babel/core
- @babel/node
- @babel/preset-env
- @babel/preset-react
- babel-loader
- webpack
- webpack-dev-server
- webpack-cli

---

## Configure npm dependencies

### Babel

https://www.robinwieruch.de/minimal-node-js-babel-setup/

Create file ".babelrc" with contents

```
{ 
  "presets": [ 
    "@babel/preset-env" 
  ] 
} 
```

babel/preset-env enables upcoming javascript features as babel presets (things like "import" in node). Consider disabiling this if you want to write kosher node.

## Create repo structure

There are many different ways to structure your repo. Here is one possible organizational structure:

Create index.js, index.html in client folder

Create server.js in your server folder

---

## Webpack

Read the tutorial here:
https://www.robinwieruch.de/webpack-setup-tutorial/
