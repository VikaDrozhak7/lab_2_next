require('dotenv').config();
const express = require('express');
const app = express();
const usersRouter = require('./pages/users');

app.use(express.json());
app.use('/api/users', usersRouter);
app.get('/', (req, res) => {
    res.send('<h1>API is running</h1><p>Go to <a href="/api/users">/api/users</a></p>');
});

app.listen(3000, () => {
    console.log('Task 4 Server (API) running on http://localhost:3000');
});
