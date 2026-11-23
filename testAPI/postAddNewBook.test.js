const axios = require('axios');
const userController = require('./controllers/userController');
const booksController = require('./controllers/booksController');
const user = {
    userName: 'Bob',
    password: 'BoBsn@il2026',
    userId: '38652bea-0e80-46e3-9056-4234418442d0'
}
 let authToken;

beforeAll(async () => {
    const authResponse = await userController.login(user.userName, user.password);
        authToken = authResponse.data.token;
})

test.only('Add book to collection', async () => {
    const responseAddedBook = await booksController.addBook(authToken, user.userId, '9781593275846');
    console.log(responseAddedBook.data);
    expect(responseAddedBook.status).toBe(201);
    expect(responseAddedBook.data.books[0].isbn).toBe('9781593275846');
    })
afterAll(async () => {
    const deleteAddedBooks = await booksController.deleteBooks(authToken, user.userId);
    expect(deleteAddedBooks.status).toBe(204);
})