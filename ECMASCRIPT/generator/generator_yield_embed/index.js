function* room(floorName) {
    yield floorName + "A";
    yield floorName + "B";
    return;
}

function* floor() {
    yield "Lobi";
    yield* room(1);
    yield* room(2);
    yield* room(3);
    yield "Teras";
}

const generateRoomName = floor();

console.log(generateRoomName.next());
console.log(generateRoomName.next());
console.log(generateRoomName.next());
console.log(generateRoomName.next());
console.log(generateRoomName.next());
console.log(generateRoomName.next());
console.log(generateRoomName.next());
console.log(generateRoomName.next());
console.log(generateRoomName.next()); 