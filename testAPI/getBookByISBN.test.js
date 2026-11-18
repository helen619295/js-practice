const axios = require('axios');

test('Get book by ISBN', async () => {
    const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781593275846');
    expect(response.status).toBe(200);
    expect(response.data.subTitle).toBe('A Modern Introduction to Programming');
    console.log(response.data);
})