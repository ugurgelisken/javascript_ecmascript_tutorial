function showTime(){
    document.body.innerHTML = new Date().toTimeString();
    // 02:27:16 GMT+0300 (GMT+03:00)
}

setInterval(function(){
    showTime();
}, 1000);

