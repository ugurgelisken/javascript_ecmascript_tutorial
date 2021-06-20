import User from './modules/User.js';

class UniqeUser extends User {
    
    uuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          })
        }
    

}

const user = new UniqeUser("ABC");
console.log(user.name);
console.log(user.uuid());