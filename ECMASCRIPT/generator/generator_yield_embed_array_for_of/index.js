function* generateRoomName() {
  floors = arguments[0].floors;
  rooms = arguments[0].rooms;
  yield "Lobi";
  for(let i = 1; i <= floors; i++)
    for(let room of rooms) 
     yield i + room;
  yield "Teras";
}

const roomName = generateRoomName( { floors: 3, rooms: ["A", "B"] } );

const generatedRoomNames = [];

for(currentRoomName of roomName)
  generatedRoomNames.push(currentRoomName);

console.log(generatedRoomNames.toString());
//Lobi,1A,1B,2A,2B,3A,3B,Teras

const [...roomName2] = generateRoomName({ floors: 3, rooms: ["A", "B"] } );
console.log(...roomName2);