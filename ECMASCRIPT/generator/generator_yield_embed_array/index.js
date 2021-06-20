const hotelInfo = {
  floors: 3,
  rooms: ["A", "B"]
}

function* generateRoomName() {

  floors = arguments[0].floors;
  rooms = arguments[0].rooms;

  yield "Lobi";
 
  for(let i = 1; i <= floors; i++){
    for(let room of rooms) {
      yield i + room;
    }
  }
  
  yield "Teras";
}

const roomName = generateRoomName(hotelInfo);

console.log(roomName.next());
console.log(roomName.next());
//...