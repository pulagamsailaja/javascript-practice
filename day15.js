//"use strict";

//Synchronous function
function task1(){
    console.log("Task 1 Started");
    let start = Date.now();
    let delay = 2000; 
    let end = start + delay;
    console.log("Task 1 Executing..");
    while(Date.now() < end) {
    }
    console.log("Task 1 Completed");
}

function task2(){
    console.log("Task 2 Started");
    let start = Date.now();
    let delay = 7000; 
    let end = start + delay;
    console.log("Task 2 Executing..");
    while(Date.now() < end) {
    }
    console.log("Task 2 Completed");
}

function task3(){
    console.log("Task 3 Started");
    let start = Date.now();
    let delay = 10000; 
    let end = start + delay;
    console.log("Task 3 Executing..");
    while(Date.now() < end) {
    }
    console.log("Task 3 Completed");
}

task1();
task2();
task3();

//Asynchronous function using setTimeout
function asyncTask1(){
    console.log("Async Task 1 Started");
    console.log("Async Task 1 Completed");
}

function asyncTask2(){
    console.log("Async Task 2 Started");
    console.log("Async Task 2 Completed");
}

function asyncTask3(){
    console.log("Async Task 3 Started");
    console.log("Async Task 3 Completed");
}

asyncTask1();
setTimeout(asyncTask2,2000);
setTimeout(asyncTask3,5000);

//SetInterval example
let count = 0;
let id = setInterval(() => {
  console.log(count++);
  if (count === 5) clearInterval(id);
}, 1000);


//Task 1
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

//Task2
let count2 = 5;

const intervalId = setInterval(() => {
  console.log(count2);
  count2--;

  if (count2 < 0) {
    clearInterval(intervalId);
    console.log("Done in 5 Seconds");
  }
}, 1000);