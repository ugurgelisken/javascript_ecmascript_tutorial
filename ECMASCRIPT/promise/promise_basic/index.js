const promise = new Promise( (resolve, reject) => {
    // İşlemler…
    if (true) resolve("Başarılı.");
    else reject("Başarısız!");
});

promise.then( mesaj => {
    console.log(mesaj); // Başarılı
}, () => {
    console.log(mesaj); // Başarısız
});