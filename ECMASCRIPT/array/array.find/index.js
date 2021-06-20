let numbers = [-4, -22, null, 0, -5, 17, 91, 103, 190];

firstPositiveNumber = numbers.find(number => {
    return number > 0
});

console.log("İlk 0'dan büyük sayı: ", firstPositiveNumber);
// İlk 0'dan büyük sayı: 17


let message = "EcmaScript bence dünyanın en güzel dili";

const findWordInMessage = (word, source) => {
    let sourceArray = source.split(" ");
    return sourceArray.find(currentWord => {
        return currentWord == word
    });
}

console.log(findWordInMessage("bence", message)); //bence
console.log(findWordInMessage("kötü", message)); //undefined