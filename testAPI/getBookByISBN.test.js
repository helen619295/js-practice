const axios = require('axios');
const booksController = require('./controllers/booksController');

test('Get book by ISBN', async () => {
    const response = await booksController.getBook('9781593275846');
    expect(response.status).toBe(200);
    expect(response.data.subTitle).toBe('A Modern Introduction to Programming');
})