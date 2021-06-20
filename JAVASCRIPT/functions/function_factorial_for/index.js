function getFactorial(number) {
    j = 1;
    for (let i = 1; i <= number; i++) {
        j = j * i;
    }
    return j;
}

console.log( getFactorial(5) ); // 120