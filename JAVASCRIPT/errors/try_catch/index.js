function checkUserData(id) {

   try {
      getUser(id);
   } catch {
      console.log("Hata oldu!");
   }

}

checkUserData(11);