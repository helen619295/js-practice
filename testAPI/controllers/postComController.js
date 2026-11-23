const axios = require('axios');
class postComController {
    async getPost(userId) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    }
    async addPost(newPost) {
        return await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    }
    async postComment (newComment) {
        return await axios.post('https://jsonplaceholder.typicode.com/comments', newComment);
    }
}

module.exports = new postComController();