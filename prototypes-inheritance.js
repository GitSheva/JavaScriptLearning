/*
Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] (can be null) and optional property descriptors.

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj (same as __proto__ getter).

Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto (same as __proto__ setter).

__proto__ is a getter/setter for [[Prototype]]

Prototypes and prototypical inheritance in objects

In prototype in objects we have only _proto_ property which represents a prototype of the object

In the following example object rabbit inherits animal through proto setter and will not have prototype property at all
*/

let animal = {
    eats: true,
    walk() {
        console.log("I'm walking!");
    }
};

let rabbit = {
    name: "vasya",
    __proto__: animal
}

/*
Prototypes in functions

In functions we would have hidden property, _proto_ - getter and setter for [[Prototype]] and prototype property
prototype property is different from any other mentioned properties and contains a "class definition" for any new created object through new from constructor function

What's the difference between __proto__ and prototype?
__proto__a reference works on every object to refer to its [[Prototype]]property.

prototype is an object automatically created as a special property of a function, which is used to store the properties (including methods) of a function object.
*/

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}

function Man(sex) {
    this.sex = "M";
}

Man.prototype = Person.prototype;

//Person.prototype.sex = "M";


//console.dir(Person);

var myFather = new Person("John", "Doe", 50, "blue");
//var myMother = new Person("Sally", "Rally", 48, "green");
console.dir(Man);
console.dir(myFather);

/*
In this example we have constructor function and we create two objects from this c.f.

Once the function annotation is executed this function will contain prototype property with definition of constructor and sex property added after definition. So it will be kind of a class to instantiate an object from.
It will also contain _proto_ property with base function as a prototype from which it is inheriting.
So, prototype property in functions does not contain inherited definition of object, it will contain self definition for child instances.
*/

/*
classes in javascript and relation with prototypes and inheritence

The following class it is just a new annotation using classes. Behind the scenes it is creating constructor function User.
So, class User after execution of the annotation will contain prototype property with it is own snapshot definition for instantiation and _proto_ property which will contain core function as a prototype.
*/

class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");

//console.dir(User);
//console.dir(user);

/*
Class inheritance using extends
It works in the same way if we would use constructor functions and prototype inheritance.

The extends keyword actually adds a [[Prototype]] reference from Rabbit.prototype to Animal.prototype, just as you expect it to be, and as we’ve seen before.

*/

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} stopped.`);
    }

}

// Inherit from Animal
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}

class Rabbit2 {
    newhide() {
        alert(`${this.name} hides!`);
    }
}


Rabbit2.__proto__ = Animal;


//let rab = new Rabbit("White Rabbit");


//console.dir(Animal);
//console.dir(Animal);
//console.dir(Rabbit);
//console.dir(Rabbit2);
//console.dir(rab);