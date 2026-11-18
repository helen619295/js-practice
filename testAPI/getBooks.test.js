const axios = require('axios');

test('Get all books', async () => {
    const response = await axios.get('https://demoqa.com/BookStore/v1/Books');
    expect(response.status).toBe(200);
    expect(response.data.books.length).toBe(8);
    expect(response.data.books[0].author).toBe('Richard E. Silverman');
})