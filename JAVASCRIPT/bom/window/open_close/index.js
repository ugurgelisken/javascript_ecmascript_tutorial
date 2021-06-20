var popupWindow;

// Sayfayı açar
function openPage() {
     popupWindow = window.open("", "popupWindow", "width=400,height=400");
     popupWindow.document.write("<p>Merhaba</p><p>popupWindow ID'li 400x400 ölçüsünde bir pencere açtık.</p>");
}

// Açık sayfayı kapatır.
function closePage() {
     popupWindow.close();
}