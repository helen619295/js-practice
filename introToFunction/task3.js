function checkOrder (available, ordered) {
    if (available < ordered) {
        console.log('Your order is too large, we don’t have enough goods.');
    }
    else if (ordered === 0) {
        console.log('Your order is empty');
    }
    else {
        console.log('Your order is accepted');
    }
}

// checkOrder(3,5);
// checkOrder(4,0);
checkOrder(4,2);

// function checkOrder (available, ordered) {
//     if (available < ordered) {
//         return 'Your order is too large, we don’t have enough goods.';
//     }
//     if (ordered === 0) {
//         return 'Your order is empty';
//     }
//     if (available >= ordered){
//         return 'Your order is accepted';
//     }
// }

// console.log(checkOrder(3,5));
// console.log(checkOrder(4,0));
// console.log(checkOrder(4,2));