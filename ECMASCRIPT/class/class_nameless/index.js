const Animal = class {

    constructor(legs) {
        this.legs = legs;
    }

    isWalk() {
        return this.legs >= 2 ? true : false 
    }
}

const spider = new Animal(8);

console.log(`Örümcekler ${spider.isWalk() === true ? "yürüyebilir" : "yürüyemez"}` );
// Örümcekler yürüyebilir