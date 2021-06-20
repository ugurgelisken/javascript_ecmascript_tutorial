const rooms = [
    { name:"A01", size:40 },
    { name:"A02", size:42 },
    { name:"A03", size:42 },
    { name:"A04", size:84 },
    { name:"A05", size:42 },
    { name:"A06", size:84 }
];

firstBilgRoom = rooms.findIndex( room => {
    return room.size > 80;
});

console.log(firstBilgRoom); //3