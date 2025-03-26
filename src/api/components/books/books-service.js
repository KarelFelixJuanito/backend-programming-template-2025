const booksRepository = require('./books-repository');

async function getBooks(offset = 25, limit = 10) {
  return booksRepository.getBooks(offset, limit);
}

async function create(title) {
  return booksRepository.create(title);
}

module.exports = {
  getBooks,
  create,
};
