

var date = new Date();

var dateString = "";

// Haftaının günü
switch (date.getDay()) {
    case 0:
        dateString = "Pazar";
        break;
    case 1:
        dateString = "Pazartesi";
        break;
    case 2:
        dateString = "Salı";
        break;
    case 3:
        dateString = "Çarşamba";
        break;
    case 4:
        dateString = "Perşembe";
        break;
    case 5:
        dateString = "Cuma";
        break;
    case 6:
        dateString = "Cumartesi";
        break;
    default:
        dateString = "Hata!";
        break;
}

// Yılın ayı
var getMonthString = function(month){
    switch (month) {
        case 0:
            return "Ocak";
            break;
        case 1:
            return "Şubat";
            break;
        case 2:
            return "Mart";
            break;
        case 3:
            return "Nisan";
            break;
        case 4:
            return "Mayıs";
            break;
        case 5:
            return "Haziran";
            break;
        case 6:
            return "Temmuz";
            break;
        case 7:
            return "Ağustos";
            break;
        case 8:
            return "Eylül";
            break;
        case 9:
            return "Ekim";
            break;
        case 10:
            return "Kasım";
            break;
        case 11:
            return "Aralık";
            break;
        default:
            return "!";
            break;
    }
}


var fullDateString = date.getUTCDate(9) + " " + getMonthString(date.getMonth() ) + " " + date.getFullYear() + " - " + dateString;

console.log(fullDateString);
// 7 Haziran 2020 - Pazartesi