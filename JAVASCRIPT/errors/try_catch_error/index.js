function checkUserData(id) {

   try {
      getUser(id);
   } catch (error) {
      console.log("Hata İsmi: ", error.name);
      console.log("Hata Açıklaması: ",error.message);
      console.log("Hataya Sebep Olan Durumlar: ",error.stack);
   }

}

checkUserData(11);