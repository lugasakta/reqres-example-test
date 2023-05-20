const assert = require('chai').expect;

const page = require('../page/PostLogin.js');

const testCase = {
 "positive" : {
    "postLoginSuccessful" : "As a User, I want to be able to login in reqres.in",
 },
 "negative" : {
    "postLoginUnsuccessful" : "User unsuccessful to login in reqres.in",
 }
}

describe(`Reqres POST Login Test`, () => {
    
 it(`@post ${testCase.positive.postLoginSuccessful}`, async() => {
    const response = await page.postLoginSuccessful().send({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
        assert(response.status).to.equal(200);
        assert(response.body).to.have.property('token')
        assert(response.body.token).to.equal('QpwL5tke4Pnpja7X4')
        var LoginSuccessful = response.body;
        console.log(LoginSuccessful);
  }),

  it(`@post ${testCase.negative.postLoginUnsuccessful}`, async() => {
    const response = await page.postLoginUnsuccessful().send({
        "email": "peter@klaven"
    })
        assert(response.status).to.equal(400);
        assert(response.body).to.have.property('error')
        assert(response.body.error).to.equal('Missing password')
        var LoginUnsuccessful = response.body;
        console.log(LoginUnsuccessful);
  });
})