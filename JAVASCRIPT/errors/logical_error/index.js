var user = [];

function addUser (id, name) {
   if(typeof id === "number" && name.length > 2){
      user.push({
         id: id,
         name: name
      });
      console.log("id:" + id + ", name:" + name + " verileri ile kullanıcı tanımlandı.")
   }else{
      console.log("Kullanıcı tanımlama için veriler hatalı!")
   }
 
   
}

addUser(0,"A");
addUser("0","ABC");
addUser(0,"ABC");