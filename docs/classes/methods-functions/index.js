class Animal {
    constructor(voice, speed) {
        this._voice = voice;
        this._speed = speed;
    }

    get speak() {
        return this._voice;
    }

    get speed() {
        return this._speed;
    }

    set speed(speed) {
        this.speed = speed;
    }
}

class Dog extends Animal {
    constructor(speed) {
        super('bark', speed);
    }
    bark() {
        return this._voice;
    }
}

class Cat extends Animal {
    constructor(speed) {
        super('meow', speed);
    }
    meow() {
        return this._voice;
    }
};

let Lassie = new Dog(10);
let GrumpyCat = new Cat(1);

console.log(Lassie.bark());
console.log(GrumpyCat.meow());