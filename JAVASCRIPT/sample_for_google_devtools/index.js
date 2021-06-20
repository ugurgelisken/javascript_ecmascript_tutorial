// Yeni işlem ekle
function display(value) {
   document.getElementById("result").value += value
}

// İşlemi hesapla
function calculate() {
   document.getElementById("result").value = eval(document.getElementById("result").value);
   let result = document.getElementById("result").value;
   console.log(result);
}

// Sonucu temizle
function clearResult() {
   document.getElementById("result").value = "";
} 