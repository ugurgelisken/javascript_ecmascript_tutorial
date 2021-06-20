const title = "Merhaba";
const user = "Abc";
const titleColor = "red";
const textFontSize = "30px";

let message = "";

message = "<div>";
message += "<h1 style='color:" + titleColor + "'>" + title + "</h1>";
message += "<p style='font-size:" + textFontSize + "'>" + user + "</h1>";
message += "</div>";

document.write(message);