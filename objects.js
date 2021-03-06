//Objects and object functions freeze(), seal(), create(), assign()
/*
* An object is a collection of related data and/or functionality.
* An object usually consist on Properties (key : value pairs) and Methods (functions inside of the object)
* In javascript everything which is not a premitive type (string, int, bool) is an object.
* Object type is on top of the herarchy of any object in JavaScript application. You can see it on __proto__ propety of any object.
* There are many ways how to create an object in JavaScript
* 
*/


/***********************************************************CREATE OBJECT EXAMPLE*************************************************************/

//Object constructor
let obj1 = new Object();

//Object literal
let obj2 = {};

//Using create function, with Object as a prototype. If specify Object instead of Object.prototype, the __proto__ of new obj will be Object cunstructor function.
let obj3 = Object.create(Object.prototype);

//Using class
class myObject{
}

let obj4 = new myObject();


/******************************************************************************************************************************************/

/***********************************************************CREATE OBJECT WITH DATA********************************************************/

// Simple literal object
let user = {
    name:"Vasiliy",
    lastName:"Lomachenko",
    getFullName:function(){
        return this.name + " " + this.lastName
    }
}

console.dir(user);

//Using other object as prototype

//Create constructor function 
function Person(){
    this.name = "Vasiliy";
    this.lastName = "Lomachenko";
    this.getFullName = function(){
        return this.name + " " + this.lastName
    }
}

//Create object person
let person = new Person();

//Create employee object with person as prototype, that will allow inheritance of Person properties and methods in employee object
let employee = Object.create(person);
employee.title = "Manager";
employee.salary = 120000;

console.dir(employee);

/******************************************************************************************************************************************/

/***********************************************************MULTIWORD PROPERTIES AND DYNAMIC KEYS******************************************/

// create object
let user = {};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];

//create property with dynamic key
const val = true;

let key = val ? "value true" : "value false";

user[key] = val;

console.dir(user);

/******************************************************************************************************************************************/

/***********************************************************SHORTHAND PROPERTY VALUES*****************************************************/

//create variables
const name = "Vasiliy";
const lastName = "Lomachenko";

// create object, instead of name:name use just a variable
let user = {
    name,
    lastName
};

console.dir(user);

/******************************************************************************************************************************************/

/***********************************************************VALIDATE IF PROPERTY EXISTS*****************************************************/

//create variables
const name = "Vasiliy";
const lastName = "Lomachenko";

// create object, instead of name:name use just a variable
let user = {
    name,
    lastName
};

//list all properties of the object
for(let key in user) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
}

console.log("name" in user);

/******************************************************************************************************************************************/