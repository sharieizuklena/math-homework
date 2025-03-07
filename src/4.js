const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const mathProblem = generateMathProblem();
  res.json({ problem: mathProblem });
});

function generateMathProblem() {
  // Generate a random math problem
  const num1 = getRandomInt(20);
  const num2 = getRandomInt(20);
  const operator = getRandomOperator();
  return `${num1} ${operator} ${num2}`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomOperator() {
  const operators = ['+', '-', '*', '/'];
  return operators[getRandomInt(4)];
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
