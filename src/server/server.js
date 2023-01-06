const { appCreator } = require('./appCreator.js');
const PORT = 8080;

const dbPostgreSQL = require('../db/dbPostgreSQL.js');

// start server
const app = appCreator(dbPostgreSQL);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
