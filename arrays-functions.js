/*
Array is a special data structure used to store ordered collections.

//Declaration:
let arr = new Array();
let arr = [];
let fruits = ["Apple", "Orange", "Plum"];


//An array can store elements of any type.
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];


//Methods
push - appends an element to the end
shift - get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
pop - takes an element from the end.

map - It calls the function for each element of the array and returns the array of results.
Syntax:
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])

Parameters:
callback
Function that produces an element of the new Array, taking three arguments:
 
currentValue
The current element being processed in the array.

index|Optional
The index of the current element being processed in the array.

array|Optional
The array map was called upon.

thisArg|Optional
Value to use as this when executing callback.




reduce - The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
This is usefull when we want to get the single result of specific operation between all array elemetns. Example sum all array elements.
ReduceRigh does the same thing but iterating from Right to Left.

filter - The filter() method creates a new array with all elements that pass the test implemented by the provided function. In other words it filter
the array with specific condition (function) and return new array with all elements that satisfy this condition.

*/


/***********************************************************METHOD MAP EXAMPLE 1************************************************************/

//For each element of array function returns it's length and add it to the new array which is returned at the end by map

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
alert(lengths); // 5,7,6

/******************************************************************************************************************************************/


/***********************************************************METHOD REDUCE EXAMPLE 1********************************************************/

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); //With initial value "5"
// expected output: 15

/******************************************************************************************************************************************/



