const path = require('path');
const { Pool } = require('pg');
const { DB_PASSWORD } = require(path.resolve(__dirname, '../../secrets.js'));

const PG_URI = `postgres://tekdpxxk:${DB_PASSWORD}@mahmud.db.elephantsql.com/tekdpxxk`;

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
