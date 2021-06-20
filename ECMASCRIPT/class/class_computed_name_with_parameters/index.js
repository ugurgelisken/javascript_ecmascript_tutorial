class Messages {

    ['message' + 1](name) {
        return "Merhaba. Ben " + name + ". " + this.getTime();
    }
    
    ['message' + 2]() {
        return "Nasılsınız?" + this.getTime();
    }
   
    ['get' + 'Time']() {
        return ` | ${new Date().toLocaleString()}`;
    }
}

const message = new Messages();
console.log(message["message1"]("Abc")); 
//Merhaba. Ben Abc.  | 6/3/2020, 2:37:06 AM 

console.log(message["message"+2]()); 
// Nasılsınız? | 6/3/2020, 2:37:06 AM