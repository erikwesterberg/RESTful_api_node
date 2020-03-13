const express = require('express');

const router = express.Router();

app.get('/', (req, res) => {
  res.send('We are on posts');
});

app.get('/specifik', (req, res) => {
  res.send('We are on a specifik posts');
});


module.exports = router;