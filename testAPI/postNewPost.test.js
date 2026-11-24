const axios = require('axios');

const newPost = {
    userId: 1,
    title: 'New post',
    body: 'The Hard Daily Life of an QA',
};

test('Is new post successfully added?', async () => {
   return axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    .then(response => {
        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(newPost);
        console.log(newPost);
    })
    .catch(error => {
        console.error('Request failed:', error.message);
    });
});