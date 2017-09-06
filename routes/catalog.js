const router = require('express').Router();

const book = require('../controllers/Book');
const author = require('../controllers/Author');
const genre = require('../controllers/Genre');
const bookinstance = require('../controllers/BookInstance');

// Book Router
router
  .get('/', book.index)
  .get('/book/create', book.createGet)
  .post('/book/create', book.createPost)
  .get('/book/:id/delete', book.deleteGet)
  .post('/book/:id/delete', book.deletePost)
  .get('/book/:id/update', book.updateGet)
  .post('/book/:id/update', book.updatePost)
  .get('/book/:id', book.detail)
  .get('/books', book.list);

// Author Router
router
  .get('/author/create', author.createGet)
  .post('/author/create', author.createPost)
  .get('/author/:id/delete', author.deleteGet)
  .post('/author/:id/delete', author.deletePost)
  .get('/author/:id/update', author.updateGet)
  .post('/author/:id/update', author.updatePost)
  .get('/author/:id', author.detail)
  .get('/authors', author.list);

// Genre Router
router
  .get('/genre/create', genre.createGet)
  .post('/genre/create', genre.createPost)
  .get('/genre/:id/delete', genre.deleteGet)
  .post('/genre/:id/delete', genre.deletePost)
  .get('/genre/:id/update', genre.updateGet)
  .post('/genre/:id/update', genre.updatePost)
  .get('/genre/:id', genre.detail)
  .get('/genres', genre.list);

// Book Instance Router
router
  .get('/bookinstance/create', bookinstance.createGet)
  .post('/bookinstance/create', bookinstance.createPost)
  .get('/bookinstance/:id/delete', bookinstance.deleteGet)
  .post('/bookinstance/:id/delete', bookinstance.deletePost)
  .get('/bookinstance/:id/update', bookinstance.updateGet)
  .post('/bookinstance/:id/update', bookinstance.updatePost)
  .get('/bookinstance/:id', bookinstance.detail)
  .get('/bookinstances', bookinstance.list);

module.exports = router;