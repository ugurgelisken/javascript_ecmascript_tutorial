
// Saniye başı güncel tarih-zaman bilgisi işlenecek
setInterval(function () {

    //  Her tekrarda yeni Date nesnesi oluşturuluyor.
    const currentDate = new Date();

    let year = currentDate.getFullYear(); // Yıl
    let month = currentDate.getMonth(); // Ay
    let day = currentDate.getDate(); // Ayın günü
    
    let dayOfWeek = currentDate.getDay(); // Haftanın günü

    let hour = currentDate.getHours(); // Saat
    let minute = currentDate.getMinutes(); // Dakika
    let second = currentDate.getSeconds(); // Saniye

    /* Switch kontrulünde getDay() ile haftanın kaçıncı gün olduğu değeri kontrolü yapılıp, String olarak gün bilgisi tutulacak. */
    let str_dayOfWeek;

    /* Switch kontrulünde getMonth ile yılın kaçıncı ayı olduğu değeri kontrolü yapılıp, String olarak ay bilgisi tutulacak. */
    let str_month;

    switch ( dayOfWeek ) {
        case 0:
            str_dayOfWeek = "Pazar";
            break;
        case 1:
            str_dayOfWeek = "Pazartesi";
            break;
        case 2:
            str_dayOfWeek = "Salı";
            break;
        case 3:
            str_dayOfWeek = "Çarşamba";
            break;
        case 4:
            str_dayOfWeek = "Perşembe";
            break;
        case 5:
            str_dayOfWeek = "Cuma";
            break;
        case 6:
            str_dayOfWeek = "Cumartesi";
            break;
    }

    switch ( month ) {
        case 0:
            str_month = "Ocak";
            break;
        case 1:
            str_month = "Şubat";
            break;
        case 2:
            str_month = "Mart";
            break;
        case 3:
            str_month = "Nisan";
            break;
        case 4:
            str_month = "Mayıs";
            break;
        case 5:
            str_month = "Haziran";
            break;
        case 6:
            str_month = "Temmuz";
            break;
        case 7:
            str_month = "Ağustor";
            break;
        case 8:
            str_month = "Eylül";
            break;
        case 9:
            str_month = "Ekim";
            break;
        case 10:
            str_month = "Kasım";
            break;
        case 11:
            str_month = "Aralık";
            break;
    }

    // Hesaplanan değerler birleştiriliyor.
    let str_fullDateTime = day + " " + str_month + " " + year + " " + str_dayOfWeek + " - " + hour + ":" + minute + ":" + second;

    console.log(str_fullDateTime);
    // 4 Temmuz 2020 Cumartesi - 16:16:32

}, 1000);