const assert = require("assert");
const { When, Then, Given } = require("@cucumber/cucumber");
const { combiner } = require("../../src/solutions");

Given("A string {string} and another string {string}", function (str1, str2) {
  this.str1 = str1;
  this.str2 = str2;
});

When("I call combiner passing both strings as parameters", function () {
  this.result = combiner(this.str1, this.str2);
});

Then("The result should be {string}", function (expectedResponse) {
  assert.equal(this.result, expectedResponse);
});
