const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.json())

//Import Routes
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
})

//Connect to db
mongoose.connect(process.env.MONGODB_KEY_CONNECTION, 
  { useNewUrlParser: true }, () => console.log('Connected to db'))

app.listen(3000);