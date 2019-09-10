const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoogleBooksSchema = new Schema({
    // title - Title of the book from the Google Books API
    title: {
        type: String,
        required: true
    },
    // authors - The books's author(s) as returned from the Google Books API
    authors: {
        type: String,
        required: true
    },
    // description - The book's description as returned from the Google Books API
    description: {
        type: String,
        required: true
    },
    // image - The Book's thumbnail image as returned from the Google Books API
    image: {
        type: String,
        required: true
    },
    // link - The Book's information link as returned from the Google Books API
    link: {
        type: String,
        required: true

    }
})

const GoogleBook = mongoose.model("GoogleBook", GoogleBooksSchema);

module.exports = GoogleBook