class User {

    constructor(name) {
        // setter çağrılacak.
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 2) {
            console.log("İsim 2 karakterden az olamaz!");
            return;
        }
        this._name = value;
    }

}

const user1 = new User("Abc");
console.log(user1.name);
// Abc

const user2 = new User("A");
// İsim 2 karakterden az olamaz!