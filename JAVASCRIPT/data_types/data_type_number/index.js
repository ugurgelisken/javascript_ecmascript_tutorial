var a = 100;
var b = 199.5;
var c = "56.22";
var d = "55.4125";
var e = "1244.2";

console.log("c:", c, typeof c);
console.log("d:", d, typeof d);
console.log("e:", e, typeof e);

c = Number(c);
d = parseFloat(d);
var d_fixed = parseFloat(d).toFixed(2);
e = parseInt(e);

console.log("c:", c, typeof c);
console.log("d:", d, typeof d);
console.log("d_fixed:", d_fixed, typeof d_fixed);
console.log("e:", e, typeof e);
