const END = 10;
var begin = 0;
var total = 0;

while( begin <= END) {
    if( Number(begin + total) >= 30){
        console.log("Bu kadar yeter");
        break;
    }
    total += begin;
    console.log(total + "+" + begin + "=" + Number(begin + total) );
    begin++;
 
}