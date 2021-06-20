let user = {
    name: "ABC",
    email: "abc@xyz.com",
    age: 20
}

for(let property in user){
    // key, value olarak yazdırılacak.
    console.log( property, user[property] );
}

/*
name ABC
index.js:9 email abc@xyz.com
index.js:9 age 20
*/