const MAP_AREA = document.getElementById("map_area");

var emptyArea = "<div style='outline:1px solid silver; width:50px; height:50px; background-color:white'></div>";
var fullArea = "<div style='outline:1px solid silver; width:50px; height:50px; background-color:green'>🐏</div>";

const map = [
   [0,0,0,0,0,0],
   [0,0,1,0,0,0],
   [0,0,0,0,0,0],
   [0,0,0,0,0,0]
];

MAP_AREA.style.width = map[0].length * 50 + "px";

for(let x = 0; x < map[0].length; x++){
   for(let y = 0; y < map.length; y++){
      console.log(x,y)
      if(map[y][x] === 1){
         MAP_AREA.innerHTML += fullArea;
      }else{
         MAP_AREA.innerHTML += emptyArea;
      }
   }
}