var a = "A";

for(var i = 0; i < 5; i++){
    var b = "B";
    function test(){
        var b = "b";
        var c = "c";
        console.log("test fonksiyonu, a:" + a + " b:" + b + " c:" + c + " i:" + i);
    }
    test();
    console.log("for döngüsü, a:" + a + " b:" + b + " i:" + i);
}

console.log("a:" + a);
console.log("b:" + b);
console.log("i:" + i);
console.log("c:" + c);