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


/***********************************************************METHOD CALL EXAMPLE 1************************************************************/

//create object
let obj = {
    a: 2,
    b: 4
};

//create function, "this" will be the object that call() will receive as a first parameter
let f = function(c) {
    return this.a + this.b + c;
}

//calling the method call() with object and the argument
console.log(`Result of call method: ${f.call(obj, 3)}`);

/*********************************************************************************************************************************************/

/***********************************************************METHOD CALL EXAMPLE 2************************************************************/
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

/*********************************************************************************************************************************************/






/*
 * The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
 * thisArg
 *   Optional. The value of this provided for the call to func. Note that this may not be the actual value seen by the method: if the method is a function 
 *   in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed.
 * argsArray
 *   Optional. An array-like object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function. 
 *   Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for browser compatibility information.
 */



/***********************************************************METHOD APPLY EXAMPLE 1************************************************************/
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

/*********************************************************************************************************************************************/


/***********************************************************METHOD APPLY EXAMPLE 2************************************************************/
/*
 * Get minimum value from array using apply() method
 */

let numArray = [5, 1, 3, 8];

console.log(" Get minimum value from array using apply() method...")
console.log(`Result: ${Math.min.apply(null, numArray)}`);

//We cannot send arrary directly to min function, it expects arguments 1,2,3 not an array, apply function in this case translate array into numberic arguments
//Example that will fail
console.log(`Result: ${Math.min(numArray)}`);

/*********************************************************************************************************************************************/


/***********************************************************METHOD APPLY EXAMPLE 3************************************************************/

/*
 * Merge two arrays using apply() method
 */


var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.log("Merge two arrays using apply() method...")
console.dir(array); // ["a", "b", 0, 1, 2]

/*********************************************************************************************************************************************/





/*
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding 
 * any provided when the new function is called.
 * 
 * function.bind(thisArg[, arg1[, arg2[, ...]]])
 * 
 * thisArg - The value to be passed as the this parameter to the target function when the bound function is called. The value is ignored if the bound 
 * function is constructed using the new operator.
 * 
 * arg1, arg2, ... - Arguments to prepend to arguments provided to the bound function when invoking the target function.
 * 
 * return - A copy of the given function with the specified this value and initial arguments.
 * 
 * 
 * The bind() function creates a new bound function (BF). A BF is an exotic function object (a term from ECMAScript 2015) that wraps the original function object. 
 * Calling a BF generally results in the execution of its wrapped function.
 * 
 * A BF has the following internal properties:
 * 
 * [[BoundTargetFunction]] - the wrapped function object;
 * [[BoundThis]] - the value that is always passed as this value when calling the wrapped function.
 * [[BoundArguments]] - a list of values whose elements are used as the first arguments to any call to the wrapped function.
 * [[Call]] - executes code associated with this object. Invoked via a function call expression. The arguments to the internal method are a this value and a 
 * list containing the arguments passed to the function by a call expression.
 * When bound function is called, it calls internal method [[Call]] on [[BoundTargetFunction]], with following arguments Call(boundThis, args). 
 * Where, boundThis is [[BoundThis]], args is [[BoundArguments]] followed by the arguments passed by the function call.
 * 
 * 
 */


/***********************************************************METHOD BIND EXAMPLE 1************************************************************/

//create object
let objBind = {
    a: 2,
    b: 4
};

let fb = function(c) {
    return this.a + this.b + c;
}

let bound = fb.bind(objBind);

console.log(bound(3)); //2+4+3 = 9

/*********************************************************************************************************************************************/

/***********************************************************METHOD BIND EXAMPLE 2************************************************************/

//Bind object to specific context

let dog = {
    sound: "woof",
    talk: function() {
        console.log(this.sound)
    }
};

dog.talk(); //woof

//pass function to variable
let talkFunction = dog.talk;

//undefined because this is not defined
talkFunction();

//bind dog to talkFunction variable
let boundFunction = talkFunction.bind(dog);

//call bounded function
boundFunction(); //print woof

/*********************************************************************************************************************************************/

/***********************************************************METHOD BIND EXAMPLE 3************************************************************/

//Example with controls and events. Requires controls to be created on the .html page

//get reference to the control
let button = document.getElementById('myNiceButton');

//bind dog.talk to the click event of my button
//this code will print undefined because this will button and button does not have talk
button.addEventListener('click', dog.talk); // print undefined

//using bind() method we replace this with dog object.
button.addEventListener('click', dog.talk.bind(dog)); // print woof

// "this" inside of the talk function could be different depending on what context is calling it. 
// When we want to replace this context we have to use bind() method and setup "this" that we need in this very moment.

/*********************************************************************************************************************************************/