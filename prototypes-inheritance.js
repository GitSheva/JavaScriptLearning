/*
******************** PROTOTYPES IN OBJECTS *********************************************

Prototypes and prototypical inheritance in objects

In objects we have only _proto_ property which represents a prototype of the object

So, regarding prototypes in javascript we will have the following related properties and methods:

1. [[Prototype]] - hidden internal property which contains a prototype of the object
2. __proto__ - getter/setter for [[Prototype]]
3. prototype - property available only in constructor functions

Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] (can be null) and optional property descriptors.

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj (same as __proto__ getter).

Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto (same as __proto__ setter).

In the following example object rabbit inherits animal through proto setter and will not have prototype (which is available in functions) property at all
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

rabbit.getName = function () {
    return "Max";
}

//console.dir(rabbit);

//console.log(rabbit.getName());


/*
We can also create an object through object create so we can avoid using _proto_ property
as it was defined in previous example
*/

let animal2 = {
    eats: true,
    walk() {
        console.log("I'm walking!");
    }
};

let rabbit2 = Object.create(animal2);
rabbit2.name = "Rabbit2";
rabbit2.getName = function () {
    return "Max";
}

/*
Best practices: It is better do not use _proto_ getter and setter for prototype setting or modifications
*/

/*
 ******************** END PROTOTYPES IN OBJECTS ******************************************
 */





/*
********************* PROTOTYPES IN FUNCTIONS ******************************************

In functions we would have [[Prototype]] hidden property, _proto_ - getter and setter for [[Prototype]] and "prototype" property
"prototype" property is different from any other mentioned properties and contains a "class definition" / pointer for any new created object through new from constructor function

What's the difference between __proto__ and prototype?
__proto__ it is a getter and setter property for internal hidden [[Prototype]]property.
We have this property in every object or function.

prototype is an object automatically created as a special property of a function, which is used to store the properties (including methods) of a function object. So, when we define constructor function, javascript automatically create prototype property for every function which will contain a definition of his own constructor and any other property which is added through function.prototype

Inheritance in constructor functions:

In order to inherit one constructor function from another we need to do the following:

1. Set ParentFunction.Call() in constructor of ChildFunction to setup parameters of parent constructor
2. Override prototype property of child function with prototype of parent function through object create. So, the prototype property of child function no longer will be it is own constructor, but the instance of the parent constructor function created through Object.Create method.
3. Change back prototype.constructor of child function to it's own constructor function. When we override prototype in point 2, the child function no longer contains it is own constructor definition. In order to fix that and make prototype of the child function point again to it is own constructor we override the constructor back pointing to it self definition.

See the example

Please note that function methods inside of the functions like: Teacher this.workingHours will not be visible in prototypes when reviewing the function structure but will be available in inherited child objects.

*/

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.fullName = function () {
    return "test";
}

function Teacher(first, last, age, gender, interests, subject) {
    // point 1
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;

    this.workingHours = function () {
        return 8;
    }
}


// point 2
Teacher.prototype = Object.create(Person.prototype);
// point 3
Teacher.prototype.constructor = Teacher;

Teacher.prototype.hair = function () {
    return "long";
}

var teacher = new Teacher("John", "Doe", 50, "male", "golf", "test");

/*
console.log(teacher.fullName());
console.log(teacher.workingHours());
console.log(teacher.hair());

console.dir(Person);
console.dir(Teacher);
console.dir(teacher);
*/

/*
CLASSES IN JAVASCRIPT AND RELATION WITH PROTOTYPES AND INHERITANCE

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
CLASS INHERITANCE USING EXTENDS
It works in the same way if we would use constructor functions and prototype inheritance.

The extends keyword actually adds a [[Prototype]] reference from Rabbit.prototype to Animal.prototype instance, just as you expect it to be, and as we’ve seen before.

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


//Rabbit2.__proto__ = Animal;


let rab = new Rabbit("White Rabbit");


console.dir(Animal);
console.dir(Rabbit);
//console.dir(Rabbit2);
console.dir(rab);