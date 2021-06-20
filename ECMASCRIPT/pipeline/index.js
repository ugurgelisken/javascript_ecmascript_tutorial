const motto = "milletleri kurtaranlar Yalnız ve ancak Öğretmenlerdir.";

const convertToTitle = text => {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

console.log(convertToTitle(motto));
//Milletleri Kurtaranlar Yalnız Ve Ancak Öğretmenlerdir.

// let motto = "milletleri kurtaranlar Yalnız ve ancak Öğretmenlerdir." |> convertToTitle;