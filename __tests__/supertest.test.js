const request = require('supertest');
const { appCreator } = require('../src/server/appCreator');

describe('Auth endpoints', () => {
  let app;
  beforeEach(() => {
    app = appCreator({});
  });
  afterEach(() => {});
  it('GET "/auth/user" response is 200', async () => {
    const response = await request(app).get('/auth/user');
    expect(response.status).toEqual(200);
  });
  it('GET "/" response is 301', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(302);
  });
  it('bad url response is 404', async () => {
    const response = await request(app).get('/asdfadswf32');
    expect(response.status).toEqual(404);
  });
});
