const assert = require("assert");
const { When, Then, Given } = require("@cucumber/cucumber");
const { combiner } = require("../../src/solutions");

Given("A string {string} and another string {string}", function () {
  return "TopCoder";
});

When("I call combiner passing both strings as parameters", function () {
  this.result = combiner("Tpo", "oCder");
});

Then("The result should be {string}", function (expectedResponse) {
  assert.equal(this.result, expectedResponse);
});
