let data = {
    users: [
        { name: "XYZ", email: "xyz@test.com" },
        { name: "ABC", email: "ABC@test.com" },
        { name: "XXX", email: "XXX@test.com" }
    ],
    getUsersTable(){
        let tableData = "İsim\tEmail";
        for(user of data.users){
            tableData += "\n" + user.name + "\t\t" + user.email;
        }
        return tableData;
    }
};  

console.log( data.getUsersTable() );