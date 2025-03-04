const { random } = require("mathjs");

function getRandomNodeJSCode() {
  return `
    const x = ${random(1, 10)};
    console.log(x);
  `;
}
