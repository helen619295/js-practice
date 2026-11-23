const axios = require('axios');
const postComController = require('./controllers/postComController');

test('Get posts by user ID', async () => {
    const response = await postComController.getPost(9);
    expect(response.status).toBe(200);
    console.log(response.data);
})