function* fibonacciGenerator() {
    [a, b] = [0, 1]
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

const fibonacci = fibonacciGenerator();

let fibonacciSeries = [];
for (let i = 0; i < 10; i++) {
    fibonacciSeries.push(fibonacci.next().value);
}

console.log(fibonacciSeries.toString());