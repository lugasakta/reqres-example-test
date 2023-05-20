const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.REQRES_URL);

const getUsersList = (page) => api.get('/api/users')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .query({'authorization': '', page : page})

module.exports = {
   getUsersList
}