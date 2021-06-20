let numbers = [1,2,3,6,10,0,6];

const numbersOdd = numbers.map(x => {
    if(x % 2 === 1) {
        return x;
    }
});

console.log(numbersOdd);


let fileSizes = [4123, 12, 51234, 512312356, 4123];

const convertByteToString = (value,decimals =2) => {
    if (value === 0) return '0 Byte';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(value) / Math.log(k));
    const stringByte = parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    return {
        byteValue: value,
        byteString: stringByte
    }
}

const fileSizesReadable = fileSizes.map(x => {
    return convertByteToString(x);
});

console.log(fileSizesReadable);;