const END = 10;
var begin, total = 0;

do{
    total += begin;
    console.log(total + "+" + begin + "=" + Number(begin + total) );
    begin++;
 
} while( begin <= END);