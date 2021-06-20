class Calculate {

    constructor(a, b) {
       this[a, b] = a, b;
    }

    static hypotenus(a,b) {
        return Math.sqrt((a*a)+(b*b));
    }
}

console.log("A üçgeninin hipotenüsü: ", Calculate.hypotenus(3, 4) ); //5
console.log("A üçgeninin hipotenüsü: ", Calculate.hypotenus(12, 44) ); //.6

/* HATA VERİR 
const calculate = new Calculate ();
console.log("A üçgeninin hipotenüsü: ", calculate.hypotenus(3, 4));
*/