describe('dev database', () => {
  let db;
  beforeAll(() => {
    db = require('../src/db/dbPostgreSQL.js'); // this automatically instantiates a pg-pool connection
  });
  afterAll(() => {
    db.pool.end(); // close pg-pool connection
  });
  it('it contains googleuserinfo table', async () => {
    const rows = await db.getTables();
    const tableNames = rows.map((e) => e.table_name);
    return expect(tableNames.includes('googleuserinfo')).toBeTruthy();
  });
});
