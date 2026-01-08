"use strict";
//challenge 1
let i = 1;
console.log("Multiples of 3:");
while (i<=50) {
    if (i%3 === 0) {
        console.log(i);
    }
    i++;
}

let j=1;
console.log("Multiples of 5:");
do {
    if (j%5 === 0) {
        console.log(j);
    }
    j++;
} while (j<=50);

console.log("Multiples of 3 and 5:");
for(i=0;i<=50;i++)
    { if (i%3 === 0 && i%5 === 0) {
    console.log(i);
    }
 }

 //challenge 2
 let numbers = [12,5,8,130,44];
 console.log("Numbers greater than 10:");
 for (let k=0; k<numbers.length; k++) { 
    if (numbers[k]>10) {
        console.log(numbers[k]);
    }
}

//challenge 3
let student = {
    name : "Sailaja",
    age : 21,
    courses : ["JS","React"]
};
student.courses.push("NodeJS");
for( let course of student.courses) {
    console.log(course);
}

//challenge 4

//In Day 13 challenge 4 folder
//JS CODE
document.getElementById("btn").addEventListener("click", () => {
  document.querySelectorAll("#list li").forEach(li => {
    li.classList.toggle("highlight");
  });
});

//challenge 5
let array=["task1","task2","task3"];
localStorage.setItem("tasks",JSON.stringify(array));
const storedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log("Stored Tasks:");
console.log(storedTasks);
storedTasks.pop();
console.log(storedTasks);
localStorage.setItem("tasks",JSON.stringify(storedTasks));

console.log("Updated Tasks in localStorage:");
console.log(JSON.parse(localStorage.getItem("tasks")));