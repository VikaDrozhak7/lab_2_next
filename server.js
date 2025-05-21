require('dotenv').config();
const express = require('express');
const app = express();

console.log('Server ENV - APP_NAME:', process.env.APP_NAME);
console.log('Server ENV - STUDENT_NAME:', process.env.STUDENT_NAME);
console.log('Server ENV - GROUP:', process.env.GROUP);

app.get('/', (req, res) => {
  const student = process.env.NEXT_PUBLIC_STUDENT_NAME || process.env.STUDENT_NAME;
  res.send(`
    <h1>Lab: ${process.env.APP_NAME}</h1>
    <h2>Student: ${student}</h2>
    <h3>Group: ${process.env.GROUP}</h3>
  `);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
