"use strict";

var box1 = "8 elma";
var box2 = "7 armut";

var box3;

box3 = box1;
box1 = box2;
box2 = box3;

box3 = null;

console.log("Kutu 1:", box1); // Kutu 1: 7 armut
console.log("Kutu 2:", box2); // Kutu 2: 8 elma
console.log("Kutu 3:", box3); // Kutu 3: null

/*
box1 = box2;

console.log(box1); // 7 armut
console.log(box2); // 7 armut
*/


var box1 = 123;
var BOX1;