
let state = {
    name: "room2"
};

// JSON'da session değeri yukarıdaki state Object'inden gelecek.

let data = {
    users: [
        { name: "XYZ", email: "xyz@test.com" },
        { name: "ABC", email: "ABC@test.com" },
        { name: "XXX", email: "XXX@test.com" }
    ],
    session: state,
    sessionExpireTime: 3600000
};  

// Düz String olarak yazdırılıyor. 
console.log( JSON.stringify( data ) );

// Yazdırılacak olan key'ler [] Array içinde belirtiliyor. 
console.log( JSON.stringify( data, ["users", "name", "session", "sessionExpireTime"]) );

console.log( JSON.stringify( data, ["users"] ) );