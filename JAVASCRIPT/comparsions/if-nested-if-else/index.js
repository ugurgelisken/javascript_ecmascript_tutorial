var didYouWakeUp = true;
var areYouSleepy = true;
var haveAjob = false;
var onWeekdays = true;

// Uyandın mı?
if(didYouWakeUp === true) {
    // Uykun var mı?
    if(areYouSleepy === true ) {
        // Bir işin var mı?
        if(haveAjob === true){
            // Haftaiçi mi?
            if(onWeekdays === true){
                console.log("Kalk");
            // Haftaiçi değil mi?
            }else{
                console.log("Yatmaya devam et");
            }
        }else{
            console.log("Yatmaya devam et");
        }
    // Uykun yok mu?
    }else{
        console.log("Kalk");
    }
}



if(didYouWakeUp) {
    if(areYouSleepy) {
        if(haveAjob){
            if(onWeekdays){
                console.log("Kalk");
            }else{
                console.log("Yatmaya devam et");
            }
        }else{
            console.log("Yatmaya devam et");
        }
    }else{
        console.log("Kalk");
    }
}


if(didYouWakeUp && areYouSleepy) {
    if(haveAjob){
        if(onWeekdays){
            console.log("Kalk");
        }else{
            console.log("Yatmaya devam et");
        }
    }else{
        console.log("Yatmaya devam et");
    }
}else{
    console.log("Kalk");
}