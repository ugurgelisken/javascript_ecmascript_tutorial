const getFactorial = function (number) {
    if (number <= 0) {
        return 1;
    } else {
        return (number * getFactorial(number - 1));
    }
};

console.log(getFactorial(5)); // 120
console.log(getFactorial(0)); // 120
console.log(getFactorial(-10)); // 120