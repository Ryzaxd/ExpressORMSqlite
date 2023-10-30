var express = require('express');
var router = express.Router();
const { sequelize } = require('../db');
const { Book } = require('./book.js');


router.post('/book', async function(req, res, next) {
  // Extract form data from request object
  const { title, authorName } = req.body;

  // Create new instance of Book model
  const newBook = Book.build({ title, authorName });

  try {
    // Save new book to database
    await newBook.save();

    // Redirect to a success page
    res.redirect('/success');
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).send('Error saving book to database');
  }
});

router.get('/success', function(req, res, next) {
  res.send('Book saved to database');
});

module.exports = router;

async function main() {
// Find all books in the library
const books = await Book.findAll();

// Log the books to the console
console.log(books.map(book => book.toJSON()));
}

main();
