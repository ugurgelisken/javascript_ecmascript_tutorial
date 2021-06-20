let text = "JavaScript çok güzel bir dil. Bu kitapla da javascript öğreniyorum.";

let regexp = /javascript/gi;

let result;

while ( result = regexp.exec(text) ) {
  console.log( result.index + " index'inde bulunan içerik '" + result[0] + "'.");
}

// 0 index'inde bulunan içerik 'JavaScript'.
// 44 index'inde bulunan içerik 'javascript'.