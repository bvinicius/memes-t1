const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");
const greeter = require("../../src/Greeter");

When("the greeter says hello", function () {
  this.whatIHeard = greeter.sayHello();
});

Then("I should have heard {string}", function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
