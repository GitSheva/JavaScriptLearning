/*
 *Global scope
 *Local Scope/Function scope
 *Block scope(Introduced in ES6), If for example
 *Closures are values from the outbound context that function is accessing/uses in their scope in specific moment of time. Usually used with inner functions.
 *if the nested function has no access to the surrounding environment
 *or the nested function does not leave the scope of the surrounding environment
 *then this is not a closure
 */

//Closure without inner functions
console.log('Closure without inner functions');

console.dir(this);

let a = 8;

let f = function() {
    let b = 2;

    return a + b;
}

console.dir(f);
console.log(`resutl of f ${f()}`);


//In this case, inner1 is not a closure, but it is a nested function. It simply doesn't use any identifiers from the surrounding scope.
console.log('not a closure because is not using any value from outbound context and does not return anything')

function outer1() {
    const foo = 42;

    function inner1() {};
}

let o1 = outer1();
console.log(`resutl of o1 ${o1}`);

//Here, inner2 does use foo, but inner2 never leaves the scope of outer2, and thus doesn't "close over" its surrounding environment. It is not a closure.
//In this example closure for inner2 exists only inside of the outer2 function
console.log('not a closure because is not leaves the scope, outer2 returns value and not innder function definition')

function outer2() {
    const foo = 42;

    function inner2() { return foo; };

    return inner2();
}

let o2 = outer2();
console.log(o2);

//Here, inner3 does leave the scope of outer3, but it doesn't use any free variables. Again, not a closure.
console.log('not a closure because is not using any value from outbound context even return inner function definition')

function outer3() {
    const foo = 42;

    function inner3() { return 23; };

    return inner3;
}

let o3 = outer3();
console.dir(o3);
console.log(`resutl of o3 ${o3()}`);

//Only inner4 is actually a closure: it leaves the scope of outer4 and closes over its environment and "takes it with it".
console.log('This is a closure because is using value from outbound context and return inner function definition')

function outer4() {
    const foo = 42;

    function inner4() { return foo; };

    return inner4;
}

let o4 = outer4();
console.dir(o4);
console.log(`resutl of o4 ${o4}`);