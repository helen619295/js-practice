const axios = require('axios');
const postComController = require('./controllers/postComController');
const newComment = {
    postId: 101,
    name: 'Bob',
    email: 'bobSnail@gmail.com',
    body: 'A very interesting and helpful post, thanks.'
};
const newPost = {
    userId: 1,
    title: 'New post',
    body: 'The Hard Daily Life of an QA',
};

describe('Get requests', () => {
    test('Get posts by user ID', async () => {
    const response = await postComController.getPost(9);
    expect(response.status).toBe(200);
    console.log(response.data);
    })
})

describe('Post requests', () => {
    test('Add new comment', async () => {
        const response = await postComController.postComment(newComment);
        const createdComment = response.data;
        console.log('status:', response.status);
        console.log('Added comment:', createdComment);
    
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(createdComment).toMatchObject(newComment);
    });

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
})