var isWeekend = function(index){
    switch (index) {
        case 1: 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
            return false;
            break;
        case 6: 
        case 0:
            return true;
            break;
    }
}

console.log( isWeekend( new Date().getDay() ) ? "Hafta sonu" : "Hafta içi"); // 3, Hafta içi
console.log( isWeekend( 1 ) ? "Hafta sonu" : "Hafta içi"); // Hafta içi
console.log( isWeekend( 0 ) ? "Hafta sonu" : "Hafta içi"); // Hafta sonu