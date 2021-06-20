/* async deyimi ile asenkron bir fonksiyon oluşturuluyor. */
async function getUserData() {

    /* İstek yapılıyor ve asenkron olması için await deyimi başına ekleniyor.
    await ile işlemin bitmesi beklenir, şu an asenkron değil.
    İstek tamamlandığında, sonuç Promise nesnesi olarak promise_user nesnesine aktarılacak. */
    let promise_users = await fetch('https://reqres.in/api/users');

    // Promise nesnesi yazdırılıyor.
    console.log(promise_users);

    /* Promise nesnesinin ok metodu true/false kontrolünden geçirliyor.
    Eğer HTTP kodları 200-209 arası ise, yani başarılıysa... */
    if (promise_users.ok === true) {

        // İstek sonucunun HTTP durum koduna bakılıyor.
        console.log("İstek cevabı: ", promise_users.status);

        // .json() metodu ile gelen veriler data_users'a JSON olarak aktarılıyor.
        let data_users = await promise_users.json();

        // Gelen veri JSON yazdırılıyor.
        console.log(data_users);
        
    } else {
        console.error("Hata: " + promise_users.status);
    }
}

getUserData();