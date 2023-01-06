const { appCreator } = require('./app.js');
const PORT = 8080;

// start server
const app = appCreator();

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
