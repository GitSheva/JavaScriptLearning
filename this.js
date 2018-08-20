/*
 *Global scope
 *Function scope
 *Object scope

*Methods can reference the object as this. 
*The value of this is defined at run-time.
*When a function is declared, it may use this, but that this has no value until the function is called. That function can be copied between objects.
*When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
 */

//Global scope, this = Window
console.log('Global scope');
console.dir(this);

//Function scope, this = Window
console.log('Function scope');

let f = function() {

    console.dir(this);
}
f();


//Object scope.
console.log('Object scope');

function Animal(name, type) {
    this.name = name;
    this.type = type;

    this.printName = function() {
        console.log(`Animal name is: ${this.name}`);
    }
}
Animal.prototype.printType = function() {
    console.log(`Animal type is: ${this.type}`);
}

let cat = new Animal('Cat', 'Feline');
cat.printName();
cat.printType();

let cat2 = Object.create(cat);
console.dir(cat);
console.dir(cat2);

let lizard = new Animal('Varane', 'Reptiles');
lizard.printName();
lizard.printType();