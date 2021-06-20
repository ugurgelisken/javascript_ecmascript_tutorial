class Messages {

    ['message' + 1]() {
        return "Merhaba" + this.getTime();
    }
    
    ['message' + 2]() {
        return "Nasılsınız?" + this.getTime();
    }
   
    ['get' + 'Time']() {
        return ` | ${new Date().toLocaleString()}`;
    }
    
}

const message = new Messages();

console.log(message.message1()); 
// Merhaba | 6/3/2020, 2:20:52 AM

console.log(message.message2()); 
// Nasılsınız? | 6/3/2020, 2:20:52 AM

console.log(message.getTime()); 
// | 6/3/2020, 2:20:52 AM
