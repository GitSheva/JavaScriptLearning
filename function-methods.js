/*
 * Method Call() - The call() method calls a function with a given this value and arguments provided individually.
 * 
 * thisArg Optional. 
 *  The value of this provided for the call to a function. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode , 
 *  null and undefined will be replaced with the global object and primitive values will be converted to objects.
 * 
 * arg1, arg2, ... Optional. 
 *  Arguments for the function.
 * 
 * return value
 *  The result of calling the function with the specified this value and arguments.
 * 
 */

/*
 * Simple example of call() method
 */

//create object
let obj = {
    a: 2,
    b: 4
};

//create function, this will be the object that call() will receive as a first parameter
let f = function(c) {
    return this.a + this.b + c;
}

//calling the method call() with object and the argument
console.log(`Result of call method: ${f.call(obj, 3)}`);


/*
 * Example of call() with base constructor and sub constructor functions
 */

let Mammal = function(legs) {
    this.legs = legs;
}

//We are calling Mammal constructor function but with Cat function, so legs property will be defined in Cat but executing code from Mammal constructor.
//This is usefful when we have base constructor and we want to re-use the setup of these properties in our sub constructor functions
let Cat = function(legs, isDomesticated) {
    Mammal.call(this, legs);
    this.isDomesticated = isDomesticated;
}

let lion = new Cat(4, false);

console.log("Lion object definition...")
console.log(`Lion domesticated: ${lion.isDomesticated} and has ${lion.legs} legs`);
console.dir(lion);

/*
 * The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
 * thisArg
 *   Optional. The value of this provided for the call to func. Note that this may not be the actual value seen by the method: if the method is a function 
 *   in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed.
 * argsArray
 *   Optional. An array-like object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function. 
 *   Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for browser compatibility information.
 */



/*
 * Simple example of apply() method
 */
//create object
let objApply = {
    a: 2,
    b: 4
};

//create function, this will be the object that call() will receive as a first parameter
let fApply = function(c, d) {
    return this.a + this.b + c + d;
}

let arr = [1, 2];

console.log("Simple example of apply() method...")
    //Result: 2+4+1+2=9
console.log(fApply.apply(objApply, arr));



/*
 * Get minimum value from array using apply() method
 */

let numArray = [5, 1, 3, 8];

console.log(" Get minimum value from array using apply() method...")
console.log(`Result: ${Math.min.apply(null, numArray)}`);
//We cannot send arrary directly to min function, it expects arguments 1,2,3 not an array, apply function in this case translate array into numberic arguments
//console.log(`Result: ${Math.min(numArray)}`);

/*
 * Merge two arrays using apply() method
 */

var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.log("Merge two arrays using apply() method...")
console.dir(array); // ["a", "b", 0, 1, 2]


/*
 * Simple example of bind() function
 */

//method bind()
let bound = f.bind(obj);
console.dir(bound);
console.log(bound(1, 2, 3));


//What is the difference between this? No difference
console.log('Simple function example');
let obj2 = { num: 2 };

let f2 = function(objArg, a, b, c) {

    return objArg.num + a + b + c;
}

console.log(f2(obj2, 1, 2, 3));