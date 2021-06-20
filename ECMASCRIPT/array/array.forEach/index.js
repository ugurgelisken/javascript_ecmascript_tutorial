let numbers = [1,2,3,6,10,0,6];
let numbersOdd = [];
let numbersEven = [];

/*

for(let i = 0;i <= numbers.length; i++){
    if(i % 2 === 0){
        numbersEven.push(i)
    }else{
        numbersOdd.push(i);
    }
}
*/

numbers.forEach( (number,index) => {
    console.log(index +". sayı: " + number);
    if(number % 2 === 0){
        numbersEven.push(number);
    }else{
        numbersOdd.push(number);
    }
});

console.log("Tek sayılar: ", numbersOdd.toString());
// Tek sayılar:  1,3,5,7

console.log("Çift sayılar: ", numbersEven.toString());
// index.js:14 Çift sayılar:  0,2,4,6*