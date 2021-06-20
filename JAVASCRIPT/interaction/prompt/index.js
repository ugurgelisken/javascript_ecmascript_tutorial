var userName = prompt("Adınızı giriniz", "");
    
// Eğer iptale' basılmamışsa...
if (userName != null) {
    alert("Hoş geldin " + userName);
}else{
    alert("Adınızı girmediniz!");
}