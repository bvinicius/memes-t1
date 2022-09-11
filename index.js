const { combiner } = require("./src/solutions");

const inputs = [
  ["Tpo", "oCder"],
  ["aa", "bb"],
  ["Tmrie", "oCus"],
  ["Pilois", "hlCln"],
];

inputs.forEach((input) => {
  const [w1, w2] = input;
  console.log(combiner(w1, w2));
});
