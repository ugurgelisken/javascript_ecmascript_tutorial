var a = 1;
const b = 2;
let c = 3;

const func_1 = () => {
    console.log("a,b,c") //1,2,3
    let func_1_1 = () => {
        console.log("fonksiyon 1.1");
    }
    const func_1_2= () => {
        console.log("fonksiyon 1.2");
    }
}
func_1();
func_1_1();
func_1_2();