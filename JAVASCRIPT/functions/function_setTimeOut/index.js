function askQuestion(text = ""){

    document.body.innerHTML = "<div> Soru: " + text + "</div>";

    // 15 saniye = 15.000 milisaniye
    let time = 15 * 1000;

    // 15 saniye sonra showTimeFinishedMessage çağırılacak.
    setTimeout( function(){
        showTimeFinishedMessage();
    }, time);

}

function showTimeFinishedMessage (text = "Süre bitti!"){
    document.body.innerHTML = "<div>" + text + "</div>";
}

askQuestion("En sevdiğiniz programlama dili nedir?");