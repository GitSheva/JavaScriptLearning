/*
 * Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
 * Functions are objects. In JavaScript, anything that is not a primitive type ( undefined, null,boolean, number, or string) is an object. 
 * When using function Declarations, the function definition is hoisted, thus allowing the function to be used before it is defined.
 * A Function Expressions defines a named or anonymous function.  Function Expressions are not hoisted, and therefore cannot be used before they are defined.
 * Arrow Function Expression, they do not create their own "this" value.
 * Values can be passed into functions and used within the function. The name of the value is called a parameter. The actual value itself is called an argument.
 */

//Function Declarations
console.log('Function Declarations');

//definition is hoisted and awailable
console.log(square(5));

function square(n) {

    return n * n;
}

//Function Expressions
console.log('Function Expressions');

//function is not hoisted, so cannot be used before definition, this line will throw error "sum is not defined"
//uncomment to test
console.log('Uncomment to test!');
//console.log(sum(5, 2));

let sum = function(a, b) {

    return a + b;
}

console.dir(sum);

//Arrow Function Expression
console.log('Arrow Function Expression');

let showMessage = () => {

    console.log('Hello');
}

showMessage();

//Self executed arrow function expression
(() => {

    console.log('Hello Self Executed');
})()