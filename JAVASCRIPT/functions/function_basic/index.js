function getTime(){
    let date = new Date();
    document.body.innerHTML = date.toLocaleTimeString();
}
getTime();