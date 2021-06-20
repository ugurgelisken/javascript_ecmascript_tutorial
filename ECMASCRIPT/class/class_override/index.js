class StringUtils {
  
  suffle(text) {
      var shuffledText = '';
      text = text.split('');
      while (text.length > 0) {
        shuffledText +=  text.splice(text.length * Math.random() << 0, 1);
      }
      return shuffledText;   
  }

}

class StringUtilsExtented extends StringUtils {
  
  suffle(text){
    return text.split(/\s\b(?!\s)/).sort(function(){return 0.5-Math.random()}).join(' ');
  }

}

const paragraph = "Ne kadar yaşadığımız değil, nasıl yaşadığımız önemlidir.";

const utils = new StringUtils;
console.log(utils.suffle(paragraph));
// dıNldene .iia iaaıadımöızııdanyağ msrm  ğğyeldlşaşrkız, 

const new_utils = new StringUtilsExtented;
console.log(new_utils.suffle(paragraph));
// yaşadığımız nasıl yaşadığımız önemlidir. değil, kadar Ne