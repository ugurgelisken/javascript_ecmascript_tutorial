
/* 3 üssü 2 ve 4 üssü 2 toplanarak bunların karekökü hesaplanıyor */
console.log( math.evaluate('sqrt(3^2 + 4^2)') );
// 5

/* -4'ün karekökü hesaplanıyor */ 
console.log( math.evaluate('sqrt(-4)').toString() );
// 2i (i, karmaşık sayı)

// 3 inch kaç cm  yapar */
console.log( math.evaluate('3 inch to cm').toString() );
// "7.619999999999999 cm"


const result_1 = math.compile('sqrt(3^4 + 2^2)');
console.log( result_1.evaluate() );
// 9.219544457292887

const result_2 = math.chain(5).add(4).multiply(3).done();
console.log(result_2); // 27


console.log( math.add(math.matrix([2, 3]), [4, 5]).toString() ); // [6, 8]
console.log( math.subtract(math.matrix([2, 3]), [4, 5]).toString() ); // [-2, -2]
console.log( math.multiply(math.matrix([2, 3]), [4, 5]).toString() ); // 23
console.log( math.divide(math.matrix([[2, 3],[ 2,3]]), [[2, 3],[ 2,13]]).toString() );
//[[1, 5.551115123125783e-17], [1, 5.551115123125783e-17]]


const t = math.derivative('x^2 + x + 2', 'x').toString();
console.log(t);
// 2 * x + 1


const f = math.simplify('x * y * -x + 4 / (x ^ 2) - 1').toString();
console.log(f);
// -(x ^ 2 * y) - 1 + 4 / x ^ 2