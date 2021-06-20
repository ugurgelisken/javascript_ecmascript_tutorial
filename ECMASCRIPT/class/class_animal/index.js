class Animal {

    constructor(legs) {
        this.legs = legs;
    }

    isWalk() {
        if (this.legs >= 2) {
            return true;
        }
        return false;
    }
}

const cat = new Animal(4);
cat.canWalk = cat.isWalk() === true ? "Kedi yürüyebilir" : "Kedi yürüyemez";

console.log(cat.canWalk);
// Kedi yürüyebilir

const fish = new Animal(0);
fish.canWalk = fish.isWalk() === true ? "Balık yürüyebilir" : "Balık yürüyemez";

console.log(fish.canWalk);
// Balık yürüyemez