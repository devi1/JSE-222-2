class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    run(){
        console.log(`${this.name} is running with ${this.speed} km/h`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} is stopping and his speed is ${this.speed}`);
    }
}

let animal = new Animal('My animal', 10);

// animal.run();

class Dog extends Animal {
    woof(){
        console.log(`${this.name} is woofing`);
    }
}

let dog = new Dog('Sharik', 20);

dog.eat();
dog.run();
dog.stop();
dog.woof();

// override - Переопределение методов

class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} is hiding in the nearest oak`);
    }
    stop(){
        super.stop();
        this.hide();
        // console.log(`${this.name} is stopped`);
    }
}

let rabbit = new Rabbit("Bugs Bunny", 15);

rabbit.eat();
rabbit.run();
rabbit.stop();

// Переопределение конструктора

class Cat extends Animal {
    constructor(name, speed, type){
        super(name, speed);
        this.type = type;
    }
}

let cat = new Cat('Tom', 10, 'Scotish');

console.log(cat.name);
console.log(cat.type);

// Нужно создать несколько родительных классов как минимум 3 родительных класса. Каждый родительный класс должен иметь 5 базовых методов. Для каждого родительного класса по 5 наследников. И каждый наследник должен иметь 3 уникальных методов. При этом каждый наследник должен иметь переопределенный конструктор и как миниму 1 переопределенный метод