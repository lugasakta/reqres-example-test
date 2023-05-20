const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.REQRES_URL);

const postLoginSuccessful = () => api.post('/api/login')
const postLoginUnsuccessful = () => api.post('/api/login')

module.exports = {
   postLoginSuccessful,
   postLoginUnsuccessful
}