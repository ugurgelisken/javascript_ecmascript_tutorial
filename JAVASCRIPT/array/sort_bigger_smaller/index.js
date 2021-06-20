let numbers = [ 4, -10, 2, 10, 20, 1 ];

// En büyük sayıyı verir.
function getBiggerNumber(array){
    return array.sort(function(x, y){
        return y - x;
      }
    )[0];
}

// En küçük sayıyı verir.
function getSmallerNumber(array){
    return array.sort(function(x, y){
        return x - y;
      }
    )[0];
}

// Azalan sıralama yapar.
function orderDESC(array){
    return array.sort(function(x, y){
        return y - x;
      }
    );
}

function orderASC(array){
    return array.sort(function(x, y){
        return x - y;
      }
    );
}
// Artan sıralama yapar.

console.log( orderASC(numbers) ); // 20, 10, 4, 2, 1, -10

console.log( orderDESC(numbers) ); // -10, 1, 2, 4, 10, 20

console.log( getBiggerNumber(numbers) ); // 20

console.log( getSmallerNumber(numbers) ); // -10