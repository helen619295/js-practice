function handleNum(num, oddNumber, evenNumber) {
    if (num % 2 === 0) {
        oddNumber();
    } else {
        evenNumber();
    }
} 

function oddNumber () {
    console.log(`Number is odd`);
}

function evenNumber () {
    console.log(`Number is even`);
}

handleNum(26, oddNumber, evenNumber);