function* fibonacciGenerator() {
    [a, b, limit] = [0, 1, yield 100]
    console.log("limit",limit)
    while (a <= limit) {
        yield a;
        [a, b] = [b, a + b]
    }
}

const fibonacci = fibonacciGenerator();

let fibonacciLimit = 10;

console.log(fibonacci.next());

console.log(fibonacci.next(fibonacciLimit)); //undefined,false
console.log(fibonacci.next(fibonacciLimit)); //0
console.log(fibonacci.next(fibonacciLimit)); //1
console.log(fibonacci.next(fibonacciLimit)); //1
console.log(fibonacci.next(fibonacciLimit)); //2
console.log(fibonacci.next(fibonacciLimit)); //3
console.log(fibonacci.next(fibonacciLimit)); //5
console.log(fibonacci.next(fibonacciLimit)); //8
console.log(fibonacci.next(fibonacciLimit)); //undefined,true
console.log(fibonacci.next(fibonacciLimit)); //undefined,true