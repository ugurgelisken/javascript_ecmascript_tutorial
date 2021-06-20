let data = {
    users: [
        { name: "XYZ", email: "xyz@test.com" },
        { name: "ABC", email: "ABC@test.com" },
        { name: "XXX", email: "XXX@test.com" }
    ]
};  

console.log(data.users)

console.log(data?.users);

console.log(data?.users[0]);

console.log(data?.users[0].name);

console.log(data?.users[0].email);

for(user of data.users){
    console.log(user.name, user.email);
}