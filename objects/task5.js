const people = [
    {userName: 'Alex', email: 'alex@gmail.com', age: 30},
    {userName: 'Matthew', email: 'matthew@gmail.com', age: 28},
    {userName: 'Tom', email: 'tom@gmail.com', age: 34}
]

for (const person of people) {
    console.log(`${person.userName} is ${person.age} years old, its email ${person.email}`)
}