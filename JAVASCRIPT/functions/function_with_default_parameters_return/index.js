const getTime = function (
    date = new Date(), 
    text = "Merhaba. Şu an: ", 
    type = 1 ){
    return "<div>" + text + ( type === 1 ? date.toLocaleTimeString() : date.toLocaleDateString() )  + "</div>";
}

console.log( getTime(new Date(), "Tarih: ", 0) ); 
// <div>Tarih: 6/12/2020</div>

document.body.innerHTML += getTime(new Date(), "Tarih: ", 0); 
document.body.innerHTML += getTime(new Date(), "", 1);
document.body.innerHTML += getTime();