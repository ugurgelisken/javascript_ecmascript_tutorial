const USER = function (username = "", email = "", age = null){
    this.username = username
    this.email = email;
    this.age = age;
}

let user_1 = new USER();

// isActive adında yeni bir properties ekleniyor.
USER.prototype.isActive = false;

// setActiveStatus adında yeni bir metot ekleniyor.
USER.prototype.setActiveStatus = function (status = false){
    user_1.isActive = status;
}


// Metot çağrılarak true değeri veriliyor.
user_1.setActiveStatus(true);

// Şu an isActive değeri true
console.log( user_1.isActive ? "Kullanıcı aktif" : "Kullanıcı pasif");

user_1.setActiveStatus();
// Şu an isActive değeri false (default)
console.log( user_1.isActive ? "Kullanıcı aktif" : "Kullanıcı pasif");