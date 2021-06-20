var a = 5;
var b = 4;
var c = 3;

if( (a > c || b >= c || a >= c ) && (b != c) ){
    console.log("Koşullar sağlandı")
}else{
    console.log("Koşullar sağlanamadı")
}

function check(a,b,c) {
    if (a > c || b >= c || a >= c ){
        if(b >= c){
            return true;
        }
    }
    return false;
}

if( check(a,b,c) ){
    console.log("Koşullar sağlandı")
}else{
    console.log("Koşullar sağlanamadı")
}