const list = Array("a","b","b","c","a","", null, 1);

const cleanList = new Set(list);
console.log(cleanList);

/*
let rooms = new Set();

rooms.add("Oda 1");
rooms.add("Oda 1");  // Tekrar eden hatalı ekleme
rooms.add("Oda 2");
rooms.add("Oda 3");
rooms.add("Oda 4");

console.log(rooms.size) // 4

rooms.delete("Oda 3");

console.log(rooms.has("Oda 3")); // false

*/
const rooms = new Set();

rooms.add({ name: "Oda 1", floor: 1 });
rooms.add({ name: "Oda 2", floor: 1 });
rooms.add({ name: "Oda 3", floor: 2 });
rooms.add({ name: "Oda 4", floor: 2 });
rooms.add({ name: "Oda 5", floor: 3 });

rooms.forEach((room) => {
  if (room.floor > 1 ) {
    rooms.delete(room);
  }
});

console.log(rooms);