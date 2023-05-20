const assert = require('chai').expect;

const page = require('../page/PostRegister.js');

const testCase = {
 "positive" : {
    "postRegisterSuccessful" : "As a User, I want to be able to register as a new user in reqres.in",
 },
 "negative" : {
    "postRegisterUnsuccessful" : "User unsuccessful to register as a new user in reqres.in",
 }
}

describe(`Reqres POST Register Test`, () => {
    
 it(`@post ${testCase.positive.postRegisterSuccessful}`, async() => {
    const response = await page.postRegisterSuccessful().send({
        email:"eve.holt@reqres.in",
        password:"pistol",
    })
        assert(response.status).to.equal(200);
        assert(response.body).to.have.property('id')
        assert(response.body).to.have.property('token')
        assert(response.body.id).to.equal(4)
        assert(response.body.token).to.equal('QpwL5tke4Pnpja7X4')
        var RegisterSuccessful = response.body;
        console.log(RegisterSuccessful);
  }),

  it(`@post ${testCase.negative.postRegisterUnsuccessful}`, async() => {
    const response = await page.postRegisterUnsuccessful().send({
        email:"eve.holt@reqres.in"
    })
        assert(response.status).to.equal(400);
        assert(response.body).to.have.property('error')
        assert(response.body.error).to.equal('Missing password')
        var RegisterUnsuccessful = response.body;
        console.log(RegisterUnsuccessful);
  });
})