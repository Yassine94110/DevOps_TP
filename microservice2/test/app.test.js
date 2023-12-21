// app.test.js
const request = require('supertest');
const app = require('../server'); // Si app.test.js est dans un dossier enfant

describe('Test des endpoints de microservice2', () => {
  it('Devrait répondre à la racine', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello from Microservice 2');
  });
});
