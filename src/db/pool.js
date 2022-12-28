const path = require('path');
const { Pool } = require('pg');

const { PG_URI } = require('../../secrets.js');

// This pools multiple db accesses into one request
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('running sql command: ', text);
    return pool.query(text, params, callback);
  },
};
