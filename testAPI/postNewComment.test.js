const axios = require ('axios');

const newComment = {
    postId: 101,
    name: 'Bob',
    email: 'bobSnail@gmail.com',
    body: 'A very interesting and helpful post, thanks.'
};

test('Add new comment', async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/comments', newComment);

    console.log('status:', response.status);
    console.log('Added comment:', response.data);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
    expect(response.data).toHaveProperty('id');
});