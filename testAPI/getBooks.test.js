const axios = require('axios');
const booksController = require('./controllers/booksController');

test('Get all books', async () => {
    const response = await booksController.getAllBooks();
    expect(response.status).toBe(200);
    expect(response.data.books.length).toBe(8);
    expect(response.data.books[0].author).toBe('Richard E. Silverman');
})