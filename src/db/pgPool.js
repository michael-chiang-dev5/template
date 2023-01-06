const path = require('path');
const { Pool } = require('pg');

const { PG_URI, DEBUG } = require('../../secrets.js');

// This pools multiple db accesses into one request
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    if (DEBUG) {
      const sqlCommand = text.replace(/\$(\d+)/g, (match, index) => {
        return typeof params[index - 1] === 'string'
          ? `\'${params[index - 1]}\'`
          : params[index - 1];
      });
      console.log('running sql command: ', sqlCommand);
    }
    return pool.query(text, params, callback);
  },
};
