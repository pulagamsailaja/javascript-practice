"use strict";

//Some Questions

let Names= ["sailaja","neha","manasa","kavya","abhi","nani","jaya","ishan","chinnu"];

//1. Print only names with length greater than 4
let longNames = Names.filter( name => name.length >5);
console.log(longNames);

let students = [
  { name: "Neha", age: 20, marks: 85 },
  { name: "Manasa", age: 21, marks: 92 },
  { name: "Kavya", age: 22, marks: 70 },
  { name: "Sailaja", age: 21, marks: 95 }
];


let grades = students.map(s => {
  return {
    name: s.name,
    grade: s.marks >= 90 ? "A" : s.marks >= 80 ? "B" : "C"
  };
});

console.log(grades);

let highest = students.reduce((max, s) => 
  s.marks > max ? s.marks : max, 0
);

console.log("Highest Marks:", highest);
