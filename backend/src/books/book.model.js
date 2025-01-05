const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },  
    oldPrice: Number,
    newPrice:Number,
    createAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
  }, {
    timestamps: true,
  });

  const Book = mongoose.model('Book', bookSchema);

  module.exports = Book;