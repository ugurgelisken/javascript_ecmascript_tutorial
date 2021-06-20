const getCurrentDate = function() {
    return "Tarih: " + new Date().toLocaleString();
};
console.log(getCurrentDate());

const user = (name, surname) => "Ben " + name + " " + surname

console.log(user("Abc","XYZ"));