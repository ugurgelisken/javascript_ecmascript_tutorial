const d_1 = new Date("2010");
console.log(d_1.toString());
// "Fri Jan 01 2010 02:00:00 GMT+0200 (GMT+03:00)"

const d_2 = new Date("2010-5-2");
console.log(d_2.toString());
// "Sun May 02 2010 00:00:00 GMT+0300 (GMT+03:00)"

const d_3 = new Date("May 10 2010 17:10:15:000");
console.log( d_3.toString() );
"Mon May 10 2010 17:10:15 GMT+0300 (GMT+03:00)"

const d_4 = new Date("2010-05-10T10:00:00Z");
console.log(d_4.toString());
// "Mon May 10 2010 13:00:00 GMT+0300 (GMT+03:00)"

const d_5 = new Date("2010-05-10T10:00:00");
console.log(d_5.toString());
// "Mon May 10 2010 13:00:00 GMT+0300 (GMT+03:00)"


