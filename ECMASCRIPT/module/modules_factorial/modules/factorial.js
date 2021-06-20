const sampleNumber = 5;

const init = () => {
    console.log("Faktöryel hesaplama modül başlatıldı");
    console.log("Örnek hesaplama: calculateFactorial(5) gibidir");
}

const calculateFactorial = number => {
    if (number === 0 || number === 1)
        return 1;
    for (let i = number - 1; i >= 1; i--) {
        number *= i;
    }
    return number;
}

const factorialExample = calculateFactorial(sampleNumber);

export { calculateFactorial, factorialExample };

export default init;