const express = require('express');
const app = express();

app.get('/', function(req, res) {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  res.send(`${num1} + ${num2} = ?`);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
