const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.REQRES_URL);

const postRegisterSuccessful = () => api.post('/api/register')
const postRegisterUnsuccessful = () => api.post('/api/register')

module.exports = {
   postRegisterSuccessful,
   postRegisterUnsuccessful
}