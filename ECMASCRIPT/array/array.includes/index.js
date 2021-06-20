let message = "EcmaScript bence dünyanın en güzel dili";

const findWordInMessage = (word, source) => {
    return source.split(" ").includes(word);
}

console.log(findWordInMessage("bence", message)); //true
console.log(findWordInMessage("kötü", message)); //false