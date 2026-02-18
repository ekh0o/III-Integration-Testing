const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/hex-to-rgb/:hex', () => {
  test('returns rgb for valid hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb/0000FF');
    expect(res.statusCode).toBe(200);
    expect(res.body.rgb).toEqual({ r: 0, g: 0, b: 255 });
  });

  test('returns error for invalid hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb/XYZ123');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid hex format');
  });
});
