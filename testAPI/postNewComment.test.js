const axios = require ('axios');
const postComController = require('./controllers/postComController');

const newComment = {
    postId: 101,
    name: 'Bob',
    email: 'bobSnail@gmail.com',
    body: 'A very interesting and helpful post, thanks.'
};

test('Add new comment', async () => {
    const response = await postComController.postComment(newComment);
    const createdComment = response.data;
    console.log('status:', response.status);
    console.log('Added comment:', createdComment);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(createdComment).toMatchObject(newComment);
});