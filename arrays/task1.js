const numbers = [2, -5, 0, 7, -1, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (let i = 0; i < numbers.length; i++) {
     if(numbers[i] >=1 ){
    positiveCount++;
    }else if (numbers[i] <= -1) {
        negativeCount++;
    }else if (numbers[i] === 0) {
        zeroCount++;
    }
}
console.log(positiveCount);
console.log(negativeCount);
console.log(zeroCount);   