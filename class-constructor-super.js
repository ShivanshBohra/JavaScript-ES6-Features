class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name); // Call the constructor of the superclass
        this.color = color;
    }

    purr() {
        console.log(`Purring in ${this.color}`);
    }

    introduce() {
        super.sayHello(); // Call the sayHello method of the superclass
        console.log(`My fur color is ${this.color}`);
    }
}

const myCat = new Cat('Whiskers', 'gray');
myCat.introduce(); //Hello, I'm Whiskers
                    // My fur color is gray


//In this example, a new method introduce is added to the Cat class. Within the introduce method, super.sayHello() is used to call the sayHello method of the superclass (Animal). This allows the introduce method to both introduce the cat and utilize the greeting from the Animal class.

