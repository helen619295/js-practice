function divide (numerator, denominator) {
    if(denominator === 0) {
        throw new Error ('Division by zero is not available!');
    }
    return numerator/denominator
}

try {
    const result = divide (120, 12);
    console.log(result);
} catch (error) {
    console.error('Ups', error.message);
}finally{
    console.log('The work is done.')
}