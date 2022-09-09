const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");
const { hohoho } = require("../../src/solutions");

When("The sorted number is {int}", function (number) {
  this.result = hohoho(number);
});

Then("The result should be {string}", function (expectedResponse) {
  assert.equal(this.result, expectedResponse);
});
