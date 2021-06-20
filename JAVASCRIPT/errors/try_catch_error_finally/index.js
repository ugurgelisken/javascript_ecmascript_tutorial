function checkUserData(id) {

   try {
      getUser(id);
   } catch (error) {
      console.log(error);
   } finally {
      console.log("İşlem bitti.")
   }

}

checkUserData(11);