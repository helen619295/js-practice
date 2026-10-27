function countToZero(num) {
    if (num > 0) {
        console.log(num);
        num--;
        countToZero(num);
    }
}

countToZero(5);