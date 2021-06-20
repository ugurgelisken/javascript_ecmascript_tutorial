var total = 0;

for(let begin = 0, end = 10; begin <= end; begin++){
    total += begin;
    console.log(total + "+" + begin + "=" + Number(begin + total) );
}