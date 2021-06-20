const MIN_WEIGHT = 200;
var apples = [123.2, 244.1, 243.0, 232.9, 187.2, 254.1, 198.6, 188.7];

var totalWeight = 0;

for(let i = 0; i <= apples.length; i++){
   
   if(apples[i] <= MIN_WEIGHT){
      continue;
   }

   if(apples[i]){
      totalWeight += apples[i];
   }
  
   
}

console.log(MIN_WEIGHT + " gram'dan büyük olan elmaların toplam ağırlığı: ", totalWeight , " gram.");
// 200 gram'dan büyük olan elmaların toplam ağırlığı:  974.1  gram.