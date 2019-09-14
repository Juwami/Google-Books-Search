const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

// Define middleware here
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Use the public
app.use(express.static('public'));
const db = require('./models');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

// Define API routes here
// /api/books (get) - Should return all saved books as JSON.
// /api/books (post) - Will be used to save a new book to the database.
// /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.

app.get('/api/books', (req, res) => {
  db.GoogleBook
    .find({})
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/api/booksearch/:val', (req, res) => {
  // console.log(`Req `, req.params.val)
  let bookTitle = req.params.val;
  let APIKey = process.env.GOOGLE_API;
  axios.get('https://www.googleapis.com/books/v1/volumes?q=' + bookTitle + '&key=' + APIKey).then((response) => {
    console.log(response);
    res.send(response.data.items);
  });
});

app.post('/api/books', (req, res) => {
  db.GoogleBook
    .create({})
    .then((books) => {
      // code to add to json
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post('/api/books/:id', (req, res) => {
  db.GoogleBook
    .remove({})
    .then
  // code to delete books
  ()
  .catch((err) => {
    console.log(err);
    throw err;
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});