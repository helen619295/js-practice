function printTextWithDelay (text, delay) {
    setTimeout(function () {
        console.log(text);
    }, delay)
}
printTextWithDelay('Print text in five seconds', 5000);