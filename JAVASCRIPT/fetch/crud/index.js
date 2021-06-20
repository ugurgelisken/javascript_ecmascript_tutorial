function getUserList(userData = {}) {
    document.getElementById("userTable").innerHTML = "Yükleniyor...";
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            // Tablo hedefleniyor...
            const table = document.getElementById("userTable");
            // Tablonun tbody içeriği temizleniyor.
            document.getElementById("userTable").innerHTML = "";
            /* Gelen JSON verisine göre her bir hücreye değerler atanıyor. */
            for (user of data.data) {
                let row = table.insertRow(0);
                let cell0 = row.insertCell(0);
                let cell1 = row.insertCell(1);
                let cell2 = row.insertCell(2);
                let cell3 = row.insertCell(3);
                cell0.innerHTML = '<input type="text" id="user_name_' + user.id + '" value="' + user.first_name + '"></input>';
                cell1.innerHTML = '<input type="text" id="last_name_' + user.id + '" value="' + user.last_name + '"></input>';
                cell2.innerHTML = '<input type="email" id="email_' + user.id + '" value="' + user.email + '"></input>';
                cell3.innerHTML = '<button onclick="updateUser(' + user.id + ')">Güncelle</button> <button onclick="deleteUser(' + user.id + ')">Sil</button>';
            }
        });
}
getUserList();

// Tabloyu, yani kullanıcı listesini yenile
function refreshTable() {
    getUserList();
}

// Yeni kullanıcı oluştur
function createUser() {

    /* input'ların id'lerine göre değerler alınıp data adlı JSON'da tutuluyor. Bu da fetch() metodunda body'e String'e çevrilerek ekleniyor. */
    let data = {
        first_name: document.getElementById("first_name").value || "",
        last_name: document.getElementById("last_name").value || "",
        email: document.getElementById("email").value || ""
    };

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Kullanıcı oluşturuldu:', data);
            // Her işlemde veri tekrar çekiliyor.
            getUserList();
        })
        .catch((error) => {
            console.error('Hata:', error);
        });

    // Eğer istekte bir hata olursa catch bloğuna düşer.
}

// Kullanıcıyı güncelle
function updateUser(id) {

    let data = {
        first_name: document.getElementById("user_name_" + id).value || "",
        last_name: document.getElementById("last_name_" + id).value || "",
        email: document.getElementById("email_" + id).value || ""
    };

    fetch('https://reqres.in/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Kullanıcı güncellendi:', data);
            getUserList();
        })
        .catch((error) => {
            console.error('Hata:', error);
        });

}

// Kullanıcıyı sil
function deleteUser(id) {
    /* Silme işleminde body'de değer gönderilmiyor. Bunun yerine URL'nin sonuna id değeri ekleniyor. */
    fetch('https://reqres.in/api/users' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Kullanıcı silindi:', data);
            getUserList();
        })
        .catch((error) => {
            console.error('Hata:', error);
        });

}