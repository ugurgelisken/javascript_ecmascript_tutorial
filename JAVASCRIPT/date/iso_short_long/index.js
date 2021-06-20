const currentDate = new Date();
console.log( currentDate.toString() );
// "Sat Jul 04 2020 14:02:22 GMT+0300 (GMT+03:00)"

const pastDate = new Date(2010, 5, 16, 17, 10, 0, 000);
console.log( pastDate.toString() );
// "Wed Jun 16 2010 17:10:00 GMT+0300 (GMT+03:00)"

const passingTime = new Date(124124444411);
console.log( passingTime.toString() );
//"Fri Dec 07 1973 17:00:44 GMT+0200 (GMT+03:00)"