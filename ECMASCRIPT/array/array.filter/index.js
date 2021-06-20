let numbers = [1, 2, 3, 6, 10, 0, 6, 17, 91, 103, 190];

numbers = numbers.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
});

console.log("Asal sayılar: ", numbers.toString());
// Asal sayılar: 1,2,3,0,17,103