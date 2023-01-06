const { appCreator } = require('./appCreator.js');
const PORT = 8080;

const db = require('../db/db.js');

// start server
const app = appCreator(db);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
