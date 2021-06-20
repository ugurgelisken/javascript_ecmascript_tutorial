let text = [ "JavaScript", "çok", "güzel", "bir", 1, "dil" ];

for(let i = 0; i < text.length; i++){
    if( typeof text[i] === "string" ) {
        text[i] = text[i].toLocaleUpperCase();
    }else{
        text.splice(i, 1);
        i--;
    }
}

console.log( text.join(" ") );
// JAVASCRIPT ÇOK GÜZEL BIR DIL