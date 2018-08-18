/*
 * Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
 * Functions are objects.
 * When using function Declarations, the function definition is hoisted, thus allowing the function to be used before it is defined.
 * A Function Expressions defines a named or anonymous function.  Function Expressions are not hoisted, and therefore cannot be used before they are defined.
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
console.log(sum(5, 2));

let sum = function(a, b) {

    return a + b;
}