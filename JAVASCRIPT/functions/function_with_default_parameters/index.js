const getTime = function (
    date = new Date(), 
    text = "Merhaba. Şu an: ", 
    type = 1){
    document.body.innerHTML += "<div>" + text + ( type === 1 ? date.toLocaleTimeString() : date.toLocaleDateString() )  + "</div>";
}

getTime(new Date(), "Tarih: ", 0);
// Tarih: 6/12/2020

getTime(new Date(), "", 1);
// 12:55:27 AM

var date = new Date();
getTime(date, "Şimdi: ", 1);
// Şimdi: 12:55:27 AM

getTime();
// Merhaba. Şu an: 12:55:27 AM