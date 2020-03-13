const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//Middlewares 
app.use('/posts', () => {
  console.log('This is a middleware running...')
})

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
})

app.get('/posts', (req, res) => {
  res.send('We are on posts');
})

//Connect to db
mongoose.connect(process.env.MONGODB_KEY_CONNECTION, 
{ useNewUrlParser: true }, 
() => console.log('Connected to db'))

app.listen(3000);