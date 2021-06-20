function loadJS(file) {
    var script = document.createElement('script');
    script.src = file;
    script.async = true;
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* JavaScript dosyalarını yükle */
loadJS('./js/write.js'); 
loadJS('./js/console.js');
setTimeout(function() {
    loadJS('./js/alert.js');
}, 1000);
