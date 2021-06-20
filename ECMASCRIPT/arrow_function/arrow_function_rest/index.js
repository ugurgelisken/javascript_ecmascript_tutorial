const dummyFunction = (a, b, c, ...parameters) => {
    console.log(a, b, c);
}
dummyFunction(1,2,3);



const takeAverage = (...parameters) => {
    let numbers = [...parameters];
    let numbersLength = numbers.length;
    let numbersTotal = 0;
    numbers.map(number => {
        numbersTotal += number;
    });
    return numbersTotal / numbersLength;
}
  
let average = takeAverage(4,5,1,12,56,3,5);
console.log(average) ;



const printParameters = (x, y, z, t = 5) => {
    console.log(x,y,z,t);
}
const numbers_1 = [0, 1, 2];
printParameters(...numbers_1); // 0 1 2 5

const numbers_2 = [0, 1, 2, 3, 4];
printParameters(...numbers_2); // 0 1 2 3