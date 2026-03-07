const request = require('supertest');
const app = require('../src/app');

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('GET /api/items returns array', async () => {
  const res = await request(app).get('/api/items');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body.items)).toBe(true);
});

test('POST /api/items creates item', async () => {
  const res = await request(app).post('/api/items').send({ name: 'Test' });
  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe('Test');
});
