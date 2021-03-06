const express = require('express');
const app = express();
const books = require('./routes/books')
const transactions = require('./routes/transactions')
const bodyParser = require('body-parser')
 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
