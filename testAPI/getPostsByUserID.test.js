const axios = require('axios');

test('Get posts by user ID', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
    expect(response.status).toBe(200);
    console.log(response.data);
})