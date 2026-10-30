/* let x = 5;
//let can change
x = 9;
console.log(x);

const y = 10;
//const cannot change
y = 15; 
// This will throw an error because y is a constant
console.log(y);

//strings
let a = "abc";
const myName = ("Bingbooglobgob1");
let b = `my name is ${myName}`;
console.log(b);

//integers
let c = 5;
const d = 10;
let e = c + d;
console.log(e);

//booleans
let f = false;
let m = null;
//null means abscence of value
let y = undefined;
//undefined has no value assigned to it/mistake */

function add(x, y) {
    //console.log(x + y);
    return x + y;
}
let x = add(5, 10);
console.log(x);

function isValid(password) {
    //does something
    //does more things
    console.log("Confirmation");
}
//abstraction, taking code and saving it for reusability, readability, etc
isValid("Printer2426!");