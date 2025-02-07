// CLASSES
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old.`)
    }
}

// create two instances of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

// call greet() method on two instances 
person1.greet();
person2.greet();

// you can also create an object without a class in JS by calling an object literal,
//  just like we did in the first part with greet: function() {}



// INHERITANCE
class Student extends Person {

}
let student1 = new Student("Milly", 4);
student1.greet();
// there are also super() class constructor calls.

// overriding methods or properites
class Animal {
    constructor(name) {
        this.name = name;
        this.species = "unknown";
    }
    greet() {
        console.log("im an animal with no species.");
    }
}
class Tiger extends Animal {
    constructor(name) {
        super(name);
        this.species = "tiger";
    }
    greet() {
        console.log("i am tiger. rawr")
    }
}



// FOR..OF
const people = ['a', 'b', 'c'];
for (let person of people) {
    // do something with every element.
}
// doing this with a String goes through it character by character.
// You can also iterate through Maps and Sets.
// You should avoid using for..in for iterables, for..in is for keys of an object.
// for..of is much cleaner for going through values.

// user-defined Iterators: 
// creating iterable object
const iterableObj = {
    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false };
                }
                else if (step === 2) {
                    return { value: '2', done: false };
                }
                else if (step === 3) {
                    return { value: '3', done: false };
                }
                return { value: '', done: true };
            }
        }
    }
}
for (const i of iterableObj) {
    console.log(i);
}

// iterating through generators (I'm not quite sure what those are)
// generator function
function* generatorFunc() {
    yield 10;
    yield 20;
    yield 30;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
    console.log(value);
}



// PROXIES
// wrap an object and redefine various operations, such as reading, insertion, validation etc.
// you can also pass an empty handler. in that case, the proxy behaves as an original object.
let student2 = {
    age: 24,
    name: "Felix"
}
const handler = {
    get: function (obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}
const proxy = new Proxy(student2, handler);
console.log(proxy.name); // Felix
console.log(proxy.age); // 24
console.log(proxy.class); // property does not exist
// class Proxy provides two handler methods: get() and set()

/*
USES OF PROXY: 
    1. checking value of a key & performing an action based on that value.
    2. read-only view of an object.
    3. calling another function when a condition is met, a "side effect"!
*/



// SETTIMEOUT
// program to display time every 3 seconds
function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    setTimeout(showTime, 3000); // recursive call after 3 seconds
}
// in the above case, setInterval() would be much more memory-efficient

// to cancel a setTimeout() method call before it happens, you'd assign it to a value (eg. ID)
//  and then use clearTimeout(id);

// you can also pass parameters into a setTimeout
function greetDoe(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

setTimeout(greetDoe, 1000, 'John', 'Doe');



// CALLBACK
// A callback is when you use a function that is passed as an argument inside a function.
// That allows for 1 function to finish work before starting another. "Synchronously".
// Helpful, when you have to wait for a result that takes time, e.g. data from a server.
function hello2(name, exitMessage) {
    console.log(`Hello, ${name}!`);
    exitMessage();
}
function exitMessage() {
    console.log("Bye!")
}



// PROMISES AND PROMISE CHAINING
// Good for asynchronous operations & for knowing whether the operation is successfully completed or not.
const count = true;
let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

// promise chaining is super useful for executing code after asynchonous call is resolved.
countValue
    .then(function successValue(result) {
        console.log(result);
    })

    .then(function successValue1() {
        console.log("You can call multiple functions this way.");
    });

// if the promise is rejected or there is an error, then the program jumps into a .catch() block!
// returns a promise
let countValue2 = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});

// executes when promise is resolved successfully
countValue2.then(
    function successValue(result) {
        console.log(result);
    },
)

    // executes if there is an error
    .catch(
        function errorValue(result) {
            console.log(result);
        }
    );

// with promises, the syntax is easier to read & error handling is easier to manage.

// you can also add a finally() method after promises which always execute, whatever happens.
// read more @ JavaScript Promise methods.



// ASYNC & AWAIT
// async functions return a PROMISE. You can also chain it using then()
async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}
f().then(function (result) {
    console.log(result);
});

// Let's make a promise that gets resolved after 4000ms.
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')
    }, 4000);
});
async function asyncFunc() {
    // wait until the promise resolves 
    let result = await promise;
    console.log(result);
    console.log('hello');
}
asyncFunc();

// you can also chain many awaits in a function.

// In an async function, you write code in a synchronous manner.
//  You can also use a catch() method to catch an error inside an async function.

// async & await were introduced in ES8. Compared to either callbacks or promises, the code is more readable, error handling is simpler, debugging is easier.



// SETINTERVAL
// setInterval(FUNCTION, TIME) executes FUNCTION every TIME milliseconds
// you can stop the interval using clearInterval(intervalID). the ID is the return value of setInterval().

// prints time 5 times every 2 seconds
let countNr = 0;
let interval = setInterval(function () {
    // increasing the count by 1
    countNr += 1;
    // when count equals to 5, stop the function
    if (countNr === 5) {
        clearInterval(interval);
    }
    // display the current time
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
}, 2000);

// just like with setTimeout, you can pass N arguments into setInterval().



// JSON
/*
JSON arrays are written inside square brackets. The JSON object itself can contain multiple key/value pairs.
You can access JSON data using dot notation.
You can also use [] notation, e.g. data["name"]
In JSON, the key should be in "", JSON cannot contain functions.
You can convert JSON data into a JS object using JSON.parse(jsonData);
JS object to JSON: JSON.stringify(jsObjectData);
*/



// JS Date and Time
/*
current date can be accessed with new Date()
Date(MILLISECONDS) will give the datetime MILLISECONDS from epoch
Date(STRING) creates a date object from a date string from YYYY-MM-DD, YYYY-MM, YYYY or ISO dates (2020-07-01T12:00:00Z)

Short & long date formats: Jul 1 2020 (long), July 1 2020 (long)
Month can be full or abbr. Month names are case-insensitive.
Commas are ignored.

JS does NOT provide a built-in function for formatting a date.
Date Objects also autocorrect - january + 33 days => Feb 02
*/



// JS Closure
// accessing an outer value from an inner function, even after the outer function has closed.
// closures are used for data privacy because you can't access the variable value.
function sum() {
    let a = 0;
    function increaseSum() {
        // a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}
let x = sum();
let a = 5;
console.log(x()); // 1
console.log(x()); // 2
console.log(a); // 5



// JS Strict mode
/*
To use Strict mode, you write
'use strict';
at the top of the program.
In strict mode:
* variables cannot be created without declaring
* in a function (first line for 1 function), /this/ is undefined & can't use variables without declaring it inside the function.
* deleting objects is not allowed
* duplicating a parameter name is not allowed
* assigning to a non-writable property is not allowed.
* assigning to a getter-only property is not allowed
* assigning to a new property of a non-extensible object is not allowed (Object.preventExtensions(obj);)
* octal syntax is not allowed
* variable names "arguments" and "eval" are not allowed
* quite a few reserved keywords.
*/


// ITERATORS & ITERABLES
const arr = [1, 2, 3];
// calling the Symbol.iterator() method
const arrIterator = arr[Symbol.iterator](); // => arrIterator: Array Iterator {}
const strIterator = 'hello'[Symbol.iterator](); // => strIterator: StringIterator {}
for (let i of arrIterator) { // same as (let i of arr) in this caase.
    console.log(i);
}
/*
const arr = ['h', 'e', 'l', 'l', 'o'];
let arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next()); // {value: "h", done: false}
console.log(arrIterator.next()); // {value: "e", done: false}
console.log(arrIterator.next()); // {value: "l", done: false}
console.log(arrIterator.next()); // {value: "l", done: false}
console.log(arrIterator.next()); // {value: "o", done: false}
console.log(arrIterator.next()); // {value: undefined, done: true}
*/

// a simple user-defined iterator
function displayElements(arr) {
    let n = 0;
    return {
        next() {
            if (n < arr.length) {
                return {
                    value: arr[n++],
                    done: false
                }
            }
            return {
                value: undefined,
                done: true
            }
        }
    }
}



// GENERATORS
// Using a generator, you can stop the execution of a function from anywhere inside the function
//  && continue executing code from a halted position.
// Let's create a generator function:
function* generatorFunc() {
    console.log("1. code before first yield");
    yield 100;

    console.log("2. code before second yield");
    yield 200;
}
const generator = generatorFunc();
console.log(generator.next()); // => 1. code before first yield\n{value: 100, done: false}
// after all yields are done, value: undefined.

// you can also pass arguments to a generator function.
function* generatorFuncArg() {
    let x = yield "hello"; // value: "hello" after first next()
    console.log(x); // executed after second next(), value: argValue (x in this case)
    console.log('break');
    yield 5; // returning value: 5
}
const argGenerator = generatorFuncArg();
console.log(argGenerator.next(4));
console.log(argGenerator.next(6));

// generators are used for implementing iterables
// regular iterable object
const anotherIterableObj = {
    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false };
                }
                else if (step === 2) {
                    return { value: '2', done: false };
                }
                else if (step === 3) {
                    return { value: '3', done: false };
                }
                return { value: '', done: true };
            }
        }
    }
}
// iterable generator
function* iterableGen() {
    yield 1;
    yield 2;
    yield 3;
}
const itGenObject = iterableGen();
// iteration through generator
for (let value of itGenObject) {
    console.log(value);
}

// generators can use return(), in which case the code after return doesn't get executed 
//  & next() after return doesn't return any value.

// generators can throw(), throwing an error & terminating the function.



// JS REGEX
/*
This will be fun.
/^a...s$/ => any 5 letter string starting with a & ending with s
*/
const regularExp = /abc/;
const regularExp2 = new RegExp('abc');
const asRegex = new RegExp(/^a...s$/);
console.log(asRegex.test('alias')); // true

// regex mostly same, but brackets! {n, m} -> at least n, at most m repetitions.
// for example, [0-9]{2,4} matches at least 2 digits, but not more than 4
// you know how this goes.



// JS DEBUGGING
/*
The easiest way is to console.log().
however, there is also a command
debugger; // stops the execution & calls the debugging function. After debug, you can press PLAY.
You can also set breakpoints for JS code in the browser's debugger window.
*/