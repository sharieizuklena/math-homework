// Node.js Code
const math = require("mathjs");

function getRandomNumber(min, max) {
  return math.randomInt(min, max);
}

console.log(getRandomNumber(10, 20));
