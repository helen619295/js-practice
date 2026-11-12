function fetchTodosByID(todosID){
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todosID}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Todo response failed: ${response.status}`);
            }
            return response.json();
        });
}

function fetchUserByID (userID) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error (`User response failed: ${response.status}`);
            }
            return response.json();
        });
}

fetchTodosByID(1)
    .then(todo => console.log(`Todo:`, todo))
    .catch(error => console.error(error));

fetchUserByID(1)
    .then(user => console.log(`User:`, user))
    .catch(error => console.error(error));

const promisesAllCollection = Promise.all([fetchTodosByID(1), fetchUserByID(1)]);
promisesAllCollection
    .then(([todo, user]) => console.log('Result all:', todo, user))
    .catch(error => console.error('Error:', error));

const promisesRaceCollection = Promise.race([fetchTodosByID(1), fetchUserByID(1)]);
promisesRaceCollection
    .then(result => console.log('Result race(only first):', result))
    .catch(error => console.error('Error:', error));