const car1 = {
    brand1: 'Audi',
    model1: 'Q8',
    year1: 2022
}

const car2 = {
    brand2: 'BMW',
    model2: 'X6',
    year2: 2022
}

const car3 = {
    ...car1,
    ...car2
}

console.log(car3);