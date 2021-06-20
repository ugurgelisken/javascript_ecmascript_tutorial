let text = [ "JavaScript", "çok", "güzel", "bir", "dil" ];

text.forEach( function(element, index ) {
    console.log(element, index);
    text[index] = element.toUpperCase();
});

console.log( text );