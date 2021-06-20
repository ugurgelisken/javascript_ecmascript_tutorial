export default class User {

    constructor(name) {
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