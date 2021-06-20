/* getWorkerList adında fonksiyon tanımlıyoruz. apiURL ile web servisi URL'i veriliyor. */
let getWorkerList = apiURL => {
    /* Fonksiyonda Promise geri döndürüyor. resolved için success, rejected için ise fail fonksiyonlarını alıyor. */
    return new Promise( (success, fail) => {
        /* apiRequest adlı XMLHttpRequest nesnesi tanımlanıyor. */
        let apiRequest = new XMLHttpRequest();
        /* GET metodunu ile apiURL ile verilen URL'e istek yapılıyor. */
        apiRequest.open("GET", apiURL, true);

        // İstek sonuçlandığında...
        apiRequest.onload = () => {
            /* 200 status kodu ile HTTP Request kontrolü yapılıyor.  200 demek, istek başarılı demektir. */
            if (apiRequest.status == 200) {
                /* resolved olan success metoduna API sonucu gönderiliyor. */
                success(apiRequest.response);
            } else {
                /* 200'den farklı bir sonuç gelirse fail fonksiyona metin mesajı gönderiliyor.*/
                fail("Veriler çekilemedi.");
            }
        }

        /* Herhangi bir hata olursa yine fail fonksiyonuna gidiliyor. Bu sefer e parametresi ile Error nesnesi da gönderiliyor */
        apiRequest.onerror = (e) => {
            fail("Hata: " + e);
        }

        // İstek başlatılıyor...
        apiRequest.send();
    });
}

/* AÇIKLAMALAR...
getWorkerList bir Promise nesnesi döndürür.
JSON verilerini çekmek için bir apiURL parametresi ile GET metodu ile istek yapılıyor.
.then() metodu JSON verisi data parametresi üzerinden konsolda yazdırılıyor.
rejected olursa hata durumu errorMessage parametresi ile konsolda yazdırılıyor. */

getWorkerList("http://dummy.restapiexample.com/api/v1/employees")
    .then( data => {
        console.log(data);
    }).catch(errorMessage => {
        console.log(errorMessage);
    }
);
