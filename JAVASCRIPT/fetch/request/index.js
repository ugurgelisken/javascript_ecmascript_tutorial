/* Web servisine PUT isteğinde bulunan ve { name, job } verileriyle kullanıcı tanımlayan bir asenkron fonksiyon. */
async function createUser( userData = {} ) {

    const request_createUser = new Request('https://reqres.in/api/users',
    {
        method: 'PUT', 
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(userData)
    });

    let p_createUser = await fetch(request_createUser);

    if (p_createUser.ok === true) {
        let result = await p_createUser.json();
        console.log("İşlem sonucu: ", result);
        // Sonucu geri döndürüyoruz ama işlemiyoruz şu an.
        return result;
    } else {
        console.error("Hata: " + p_createUser.status);
    }
}

// 1. kullanıcıyı oluştur.
createUser({
    name: "ABC",
    job: "Software Enginer"
});

// 2. kullanıcıyı oluştur.
createUser({
    name: "XYZ",
    job: "SEO Manager"
});