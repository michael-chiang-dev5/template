const pg = require('./pgPool.js');

const db = {};

db.getCards = async () => {
  const sql = 'SELECT * FROM cards';
  const data = await pg.query(sql);
  return data.rows;
};

db.createUser = async (args) => {
  try {
    const arr = [
      args['sub'],
      args['picture'],
      args['email'],
      args['email_verified'],
    ];
    const sql = `INSERT INTO Users
    (sub, picture, email, email_verified)
    VALUES ($1, $2, $3, $4)
    RETURNING *;`;
    const data = await pg.query(sql, arr);
    console.log(data.rows);
    return data.rows[0]._id;
  } catch (err) {
    console.log('createUser', err);
  }
};

db.getUser = async (sub) => {
  try {
    const sql = `SELECT * 
    FROM Users
    WHERE Users.sub=$1`;
    const data = await pg.query(sql, [sub]);
    if (data.rows.length === 0) {
      return null;
    } else if (data.rows.length === 1) {
      return data.rows[0];
    } else {
      throw `db.getUser: more than one user found with sub ${sub} (found ${data.rows.length})`;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

module.exports = { db };
