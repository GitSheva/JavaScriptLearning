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


*/


//Arrays map(), reduce(), filter

let user = {
    name: "John",
    money: 1000,

    // for hint="string"

    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"

    valueOf() {
        return this.money;
    }


};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 1); // valueOf -> 1500