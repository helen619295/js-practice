async function fetchTodosByID(todosID) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todosID}`);
    const todo = await response.json();
    console.log(todo);
}
fetchTodosByID(1);

async function fetchUserByID(userID) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
    const user = await response.json();
    console.log(user);
}
fetchUserByID(1);