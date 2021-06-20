const title = "Merhaba";
const user = "Abc";
const titleColor = "red";
const textFontSize = "30px";

let message = "";

message = "<div>\
            <h1 style=\'color:" + titleColor + "\'>" + title + "</h1>\
            <p style=\'font-size:'" + textFontSize + "\'>" + user + "</h1>\
            </div>";

document.write(message);

