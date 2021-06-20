let shoppingList = new Map();
shoppingList.set(0, 'Ekmek');
shoppingList.set(1, 'Süt');
console.log(shoppingList.get(0)); // Ekmek
console.log(shoppingList.get(1)); // Süt
console.log(shoppingList.size); // 2
for (let i of shoppingList) {
    console.log(i);
}


let users = new Map();

users.set(0, "A");
users.set(1, "B");
users.set(2, "C");
users.set(3, "D");

users.delete(2); // B kullanıcısı silindi.
console.log(users.size) // 3 eleman kaldı.

// 2 ve 3 key'li elemanlar var mı diye bakılıyor...
console.log(users.has(2)) // false
console.log(users.has(3)) // true

// Anahtarlar yazdırılıyor...
for (let key of users.keys()) {
    console.log(key); // 0,1,3
}

// Değerler yazdırılıyor...
for (let key of users.keys()) {
    console.log(key); // A,B,C
}

users.clear(); // Temizlendi
