let data = {
    users: [
        { name: "XYZ", email: "xyz@test.com" },
        { name: "ABC", email: "ABC@test.com" },
        { name: "XXX", email: "XXX@test.com" }
    ],
    session: "room1",
    sessionExpireTime: 3600000
};  

console.log( JSON.stringify( data, null, 4 ) );