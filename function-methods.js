/*
 * Method Call() - Executing the function passing object as a parameter, this inside of the function will be the object argument.
 * Method Aplly() - The same as call() but allows to pass array as parameter.
 * Method Bind() - Return a function that has TargetFunction=function that we are binding, BoundThis = object that we are binding, BoundArgs = arguments of the function 
 * (arguments can be sent on the bind() or executing the result function of bind())
 */


let obj = { num: 2 };

let f = function(a, b, c) {
    return this.num + a + b + c;
}

//method call()
console.log(f.call(obj, 1, 2, 3));

//method apply()
let arr = [1, 2, 3];
console.log(f.apply(obj, arr));

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