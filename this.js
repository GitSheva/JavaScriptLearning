/*
 *Global scope
 *Function scope
 *Object scope
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

let lizard = new Animal('Varane', 'Reptiles');
lizard.printName();
lizard.printType();