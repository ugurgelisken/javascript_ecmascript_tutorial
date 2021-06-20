var users = [
   {
      id: 126123,
      name: "A"
   },
   {
      id: 23235,
      name: "B"
   },
   {
      id: 23563,
      name: "C"
   },
   {
      id: 567563,
      name: "D"
   },
];

var activeUser = {};

function findUserById( userId){
   for(let i = 0; i < users.length; i++){
      console.log( (i+1) +  ". arama", users[i]);
      if(users[i].id === userId){
         console.log( (i+1) +  ". aramada bulundu.");
         activeUser = users[i];
         break;
      }
   }
}

findUserById(23235);

console.log(activeUser); // {id: 23235, name: "B"}
