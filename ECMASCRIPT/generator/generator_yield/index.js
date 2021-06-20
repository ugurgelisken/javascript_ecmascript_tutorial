function* siraOlustur() {
    yield 1;
    yield 2;
    return 3;
}
let generator = siraOlustur();

const value = () => {
    return generator.next().value;
}

console.log(value()); //1
console.log(value()); //2
console.log(value()); //3
console.log(value()); //undefined


function* generateGuestName() {
    let index = 0;
    while (true)
        yield "Misafir#" + index++;
}

let guestName = generateGuestName();

console.log(guestName.next().value); // Misafir#0
console.log(guestName.next().value); // Misafir#1
console.log(guestName.next().value); // Misafir#2
console.log(guestName.next().value); // Misafir#3
// ...

console.log(guestName.next()); // Misafir#0


function* max2UserForGame() {
    yield "Oyuncu 1",
    yield "Oyuncu 2"
}

const userName = max2UserForGame();

console.log(userName.next());
console.log(userName.next());
console.log(userName.next());

