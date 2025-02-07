
//import { greetPerson } from "./001_importModule";

// console.log("Hello World!");

// valid variable names; _ and $ allowed as first char
let message = "hello";
let _message = "hello";
let $message = "hello";
// let for mutable, const for immutable
const num = 10;
// console.log(num);



// DATA TYPES
let integer = -3;
let float = 3.14;
let bigInt = 3n; //console.log(bigInt + 1n);
let boolean0 = false
let name; // name is undefined
let name2 = undefined; // name2 is undefined
let name0 = null; // no value, nothing
let value1 = Symbol("hi");
let value2 = Symbol("hi");
// value1 === value2 -> false; SYMBOL COMPARES OBJECTS
let student = {
    firstName: "John",
    lastName: null,
    class: 6
};



// OPERATORS
// arithmetic operations same as java
// console.log(3 == "3") // true
// console.log(3 === "3") // false



// TYPE CONVERSION
// JS has quite good implicit type conversion
// HOWEVER, it's always better to write explicit types :) ALC (Automata, Languages and Compilers) propaganda
let result;
result = Number("5"); // Num 5
result = String(true); // "true"
result = Boolean(0); // false



// STATEMENT TYPES
// if, else if, else, switch(BREAK AFTER EVERY CASE) - same
// for, while, do while, break, continue - same



// FUNCTIONS
function greet() {
    console.log("Hello!");
}
greet();
/*
function greet(name) {
    console.log(`Hello, ${name}`);
} IF THIS IS LEFT IN, THEN greet() ON LINE 54 will output "Hello, undefined"*/
function greetName(name) {
    console.log(`Hello, ${name}!`);
}
greetName("Name");



// VARIABLE SCOPE
// Starting from ES6, JS could have global, local-level AND block-level variables.



// HOISTING
console.log(test);
var test = 5;
// prints "undefined", BUT DOES RUN! However, the variable doesn't initialise.
//console.log(testLet);
let testLet = 5;
// ReferenceError: Cannot access 'testLet' before initialization

greeting();
function greeting() {
    console.log("Greetings!");
}



// OBJECTS
let johnny = {
    name: "Johnny",
    age: 20,
    hair: "yellow",
    greet: function () {
        console.log(`${this.name} says Hi!`)
    }
}
johnny.rollNo = 14;
johnny.faculty = "Sci";
delete johnny.hair;
johnny.greet();
// JÄRGMINE RIDA ON OLULINE
johnny.bye = function () {
    console.log(`${this.name} says Bye!`);
}
johnny.bye();



// METHODS
console.log(3.14159.toFixed(3));
// Note: You should not declare strings, numbers, and boolean values as objects 
//  because they slow down the program. 
//  Instead, declare them as primitive types using code such as 
//  let name = "John", let number = 57, etc.



// CONSTRUCTOR
// constructor function with parameters
function Person(person_name, person_age) {

    // assign parameter values to the calling object
    this.name = person_name,
        this.age = person_age,

        this.greet = function () {
            return (`Hi ${this.name}`);
        }
}
const person1 = new Person("John", 23);
const person2 = new Person("Sam", 25);
// getter-setter is the same
// getting property
Object.defineProperty(person1, "getName", {
    get: function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(person1, "changeName", {
    set: function (value) {
        this.firstName = value;
    }
});



// PROTOTYPE
// Properties or methods added to the prototype of a constructor function 
//  are accessible to all objects derived from it. 
function Car() {
    console.log("Car instance created!");
}
Car.prototype.colour = "Red";
Car.prototype.drive = function () {
    console.log(`Driving the ${this.colour} car`);
}
console.log(`Car colour: ${Car.prototype.colour}`);
Car.prototype.drive();
// JavaScript always searches for properties in the objects of the constructor function first.
//  Then, it searches in the prototype.
//  This is called PROTOTYPE CHAINING.



// ARRAY
let activities = ["eat", "sleep"];
activities.push("wake"); // adds to the end
activities.unshift("work"); // adds to the beginning
activities.splice(2, 1); // starting at index 2, remove 1 element.



// STRINGS
let msg = "hello";
msg[1]; // "h"
console.log(typeof msg.charAt(1)); // "h" STRING MITTE CHAR
msg[0] = "H"; // String is immutable, nothing changes.
console.log(msg);
// "a" == "A" => false
// "a".concat(" ", "b")     => "a b"
// "a" + " " + "b"          => "a b"
// "hello".slice(1,3)       => "el"



// FOR-IN
for (let key in person1) {
    console.log(`${key} => ${person1[key]}`)
}



// NUMBERS
console.log(4 - "hello"); // NaN
console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity



// SYMBOL
// Immutable & unique.
const xyz = Symbol('hey');
// console.log(x);  // Symbol(hey)
console.log(xyz.description); // hey

// symbol as a key in an object:
let id = Symbol("id");
let human = {
    name: "Jill",
    [id]: 123
}
console.log(human); // {name: "Jill", Symbol(id): 123}
// The for...in loop DOES NOT iterate over Symbolic properties.

// If the same code snippet is used in various programs, then it is better to use Symbols in the object key. 
//  It's because you can use the same key name in different codes and avoid duplication issues. 
//  Even if the same name is used to store values, the Symbol data type will have a unique value.
// SYMBOL METHODS!


// TRY-CATCH-FINALLY & THROW
setTimeout(function () {
    try {
        // error in the code
    } catch {
        console.log("error is caught");
    }
}, 3000); // calls a function after 3000 ms.
// if the setTimeout was inside the try-block with the error in timeout, then it wouldn't be caught.
/*
const number = 5;
try {
     // user-defined throw statement
     throw new Error('This is the throw');

}
catch(error) {
    console.log('An error caught');
    if( number + 8 > 10) {

        // statements to handle exceptions
         console.log('Error message: ' + error); 
        console.log('Error resolved');
    }
    else {
        // cannot handle the exception
        // rethrow the exception
        throw new Error('The value is low');
    }
}
*/



// MODULE
// this is broken right now, likely due to mismatched module classifications on my training files
// let julie = greetPerson("Julie");
// console.log(julie);
// default export allows to choose a function to always export (if, say, the name was wrong)
// https://www.programiz.com/javascript/modules



// ES6 CHANGES
// default paramater values
function sum(numA, numB = 5) {
    console.log(numA + numB);
}
// sum(10); // => 15

// arrow function!!! beautiful
/* OLD VERSION
let product = function(x, y) {
    return x * y;
}
*/
let product = (x, y) => x * y;

// destructuring
const hospital = {
    doctors: 23,
    patients: 44,
};
// assigns hospital.doctors to variable doctors & hospital.patients to variable patients
let { doctors, patients } = hospital;

// asynchronous tasks - PROMISES
// promise on var countValue; resolving promise after 5 sec
let countValue = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved!");
    }, 5000);

});

// executes when promise resolves
countValue.then(function successValue(result) {

    console.log(result);
});

// rest parameter ... - an infinite number of arguments.
function show(a, b, ...args) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("args:", args);
}
// show(1, 2, 3, 4, 5); => a: 1; b: 2; args: [ 3, 4, 5 ]

// spread operator ... - unpacking array or object
let numArr = [1, 2, 3];
console.log([numArr, 4, 5]); // [[1,2,3],4,5]

console.log([...numArr, 4, 5]); // [1,2,3,4,5]



// ARROW FUNCTIONS
const sayHello = () => "Hello, World!";
const square = x => x * x;



// TEMPLATE LITERAL
function displayMessage(message) {
    return message;
}
// create a tagged template
let displayableMessage = displayMessage`Hello there!`
console.log(displayableMessage);



// SPREAD OPERATOR WITH OBJECT
let obj1 = { x : 1, y : 2 };
let obj2 = { z : 3 };
// use the spread operator to add
// members of obj1 and obj2 to obj3
let obj3 = {...obj1, ...obj2}; // obj3 = { x: 1, y: 2, z: 3 }
// add obj1 and obj2 without spread operator
let obj4 = {obj1, obj2}; // obj4 = { obj1: { x: 1, y: 2 }, obj2: { z: 3 } }

function sum2(num1, num2 , num3) {
    console.log(num1 + num2 + num3);
}
let num1 = [1, 3, 4, 5];
// pass the first three array elements
sum2(...num1); 
// Output: 8



// MAP
// a map can have objects, functions & other data types as a key.
let map1 = new Map();
map1.set('info', {name: 'Jack', age: 25});
let obj = {};
let map2 = new Map();
map2.set(obj, {name: 'Jack', age: "25"});
map1.get('info'); // => {name: 'Jack', age: 25}
map1.has('info'); // => true
// looping through Map
for (let [key, value] of map1) {
    console.log(key + ' - ' + value);
} 
// or alternatively
map1.forEach(function(value, key) {
    console.log(key + ' - ' + value);
})
// or-or alternatively
for (let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}
// looping through keys
for (let key of map1.keys()) {
    console.log(key);
}
// looping through values
for (let values of map1.values()) {
    console.log(values);
}

map1.delete('address'); // false, because no such key was found
map1.delete('info'); // true
map1.size;
map1.clear(); // removing all elements

// Map performs better for programs that require the addition or removal of elements frequently.

// WeakMap can only contain objects as keys.
const weakMap = new WeakMap();
let object1 = {};
weakMap.set(object1, "hello");
// weakMap.set('obj', 'hello'); => TypeError: Attempted to set a non-object key in a WeakMap
// weakmaps are NOT iterable.



// SETS AND WEAKSETS
// obviously, duplicate values are excluded.
const set1 = new Set(); // => Set {}
const set2 = new Set([1, 'hello', {count: true}]); // => Set {1, "hello", {count: true}}
set1.add(1);
set1.values() // => Set Iterator [3]
set2.has(1); // => true
// set.delete(value) and set.clear()
// looping through Set
for (let el of set2) {
    console.log(el);
}

// WeakSet is like a set, but WeakSet can only contain objects, not primitives.
// Again, WeakSets are not iterable.

// There are no union/subset/diff operations built into JS, but those are easy to create.



// DESTRUCTURING
// object:
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}
// destructuring assignment
// using different variable names
let { name: name1, age: age1, gender:gender1 } = person;

// destructuring an array: 
const arrValue = ['one', 'two', 'three'];
const [x, y, z] = arrValue;
// you can also add default values!
const arrValue1 = [10];
let [x0 = 5, x1 = 7] = arrValue1; // => x0: 10; x1: 7

// swapping variables
let i1 = 4, i2 = 5;
[i1, i2] = [i2, i1];
console.log(i1); // => 5, not 4 as previously assigned.

// skipping items while destructuring
const [a, , c] = arrValue; // => a: 'one'; c: 'three'

// assigning remaining elements to a single var - using the spread syntax
const bigArray = [1,2,3,4,5];
const [j1, ...j2] = bigArray; // => j1: 1; j2: [2,3,4,5]

// you can also execute NESTED DESTRUCTURING, [1,[2,3]] to [x, [y,z]] etc. 
// Same with object destructuring
const jack = {
    jackName: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}
// nested destructuring 
const {jackName, hobbies: {read, playGame}} = person;



// CLASSES continues in 001_clasees.js
