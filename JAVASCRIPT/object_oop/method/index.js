function USER(username, email, age){
    this.username = username;
    this.email = email;
    this.age = age;
    this.getID = function(){ 
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    },
    this.whoIs = function(){
        return "Bu kullanıcı " + this.age + " yaşında, " + this.email + " email adresi ile kayıtlı ve kullanıcı adı da " + this.username + "'dir.";
    }
}

const user = new USER("ABC", "abc@xyz.com", 30);

console.log("Kullanıcının ID'si:",  user.getID());
// Kullanıcının ID'si: mtmjqgb7rf10i4mrkfwy4

console.log(user.whoIs());
//* Bu kullanıcı 30 yaşında, abc@xyz.com email adresi ile kayıtlı ve kullanıcı adı da ABC'dir. */