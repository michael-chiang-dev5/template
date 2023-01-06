const { makeApp } = require('./app.js');
const PORT = 8080;

// start server
console.log(makeApp);
const app = makeApp();

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
