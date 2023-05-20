const assert = require('chai').expect;

const page = require('../page/GetUsers.js');

const testCase = {
 "positive" : {
    "getUsersList" : "As a User, I want to be able to get Users list in page 2",
 }
}

describe(`Reqres Get Users List`, () => {
const pages = '2';
const invalidPages ='';

 it(`@get ${testCase.positive.getUsersList}`, async() => {
   const response = await page.getUsersList(pages);
   assert(response.status).to.equal(200);
   assert(response.body.page).to.equal(2);
   assert(response.body.per_page).to.equal(6);
   assert(response.body.total).to.equal(12);
   assert(response.body.total_pages).to.equal(2);
   assert(response.body.data[0]).to.have.property('id');
   assert(response.body.data[0]).to.have.property('email');
   assert(response.body.data[0]).to.have.property('first_name');
   assert(response.body.data[0]).to.have.property('last_name');
   assert(response.body.data[0]).to.have.property('avatar');
 })
})