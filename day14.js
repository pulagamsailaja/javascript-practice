"use strict";

//Scope
let x = 10; 

function test() {
  let y = 20;
  if (true) {
    let z = 30; 
    console.log(z); 
  }
}
test();

//Hoisting
console.log(a);
var a = 5;

 // console.log(b); // This will cause an error
let b = 5;
console.log(b);

sayHi(); 
function sayHi() {
  console.log("Hi");
}

//Closures
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter(); // 1
counter(); // 2

//Nested Functions
function fun1(){
    console.log("Function 1");
    function fun2(){
        console.log("Function 2");
    }
    return fun2;
}
let exmp=fun1();
exmp();

//Callbacks
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}   
function day14() {
    console.log("TODAY IS DAY 14");
}
greet("Sailaja", day14);