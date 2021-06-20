
var text = "javascript çok güzel bir dil";
console.log( v.titleCase(text) );
// Javascript Çok Güzel Bir Dil

console.log( v.countWords(text) );
// 5

var message = "<script>alert('merhaba')</script>";
console.log( v.escapeHtml(message) );
// &lt;script&gt;alert(&#x27;merhaba&#x27;)&lt;/script&gt;

console.log( v.isUpperCase("merhaba") ); // false
console.log( v.isLowerCase("merhaba") ); // true

var htmlText = "<div class='title-area'><h1>Başlık</h1></div>";
console.log( v.stripTags(htmlText) ); // Başlık