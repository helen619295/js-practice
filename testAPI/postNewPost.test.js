const axios = require('axios');
const postComController = require('./controllers/postComController');

const newPost = {
    userId: 1,
    title: 'New post',
    body: 'The Hard Daily Life of an QA',
};

test('Is new post successfully added?', async () => {
   return postComController.addPost(newPost)
    .then(response => {
        const createdPost = response.data;
        expect(response.status).toBe(201);
        console.log(response.status);
        expect(createdPost).toMatchObject(newPost);
        console.log(createdPost);
    })
    .catch(error => {
        console.error('Request failed:', error.message);
    });
});