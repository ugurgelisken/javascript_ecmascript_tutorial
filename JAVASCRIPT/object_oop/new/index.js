function USER(username, email, age){
    this.username = username;
    this.email = email;
    this.age = age;
}

var user_1 = new USER("ABC", "abc@xyz.com", 30);

console.log(user_1);