
const data1 = () => {
    setTimeout( () => {
        console.log("1 -> ", new Date().toTimeString());
    },1000);
}

const data2 = () => {
    setTimeout( () => {
        console.log("2 -> ", new Date().toTimeString());
    },3000);
}

const data3 = () => {
    setTimeout( () => {
        console.log("3 -> ", new Date().toTimeString());
    },10);
}

const calculateAll = async () => {
    await data1();
    await data2();
    await data3();
}

calculateAll ();

