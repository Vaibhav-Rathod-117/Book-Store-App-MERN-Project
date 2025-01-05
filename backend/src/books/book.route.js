const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const router = express.Router();

//post = when submit something frontend to database
//get = when get something back from database
//put/patch = when edit or update something
//delete = when delete something

router.post("/create-book", postABook)

//get all books
router.get("/", getAllBooks)

//get single book
router.get("/:id", getSingleBook)

//update book
router.put("/edit/:id", UpdateBook)

//delet book
router.delete("/edit/:id", deleteABook)

module.exports = router;