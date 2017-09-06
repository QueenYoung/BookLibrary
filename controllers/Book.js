const Book = require('../models/book');
const createAPI = require('./HOC');

const bookApi = createAPI('Book');
bookApi.index = (req, res) => res.send('NOT IMPLEMENT: SITE HOME PAGE');
module.exports = bookApi;