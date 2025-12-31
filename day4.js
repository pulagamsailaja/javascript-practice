"use strict";
// Arrays

let arr = ["sailaja","neha","manasa","kavya"];
console.log(arr);

//Array with loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i of arr) {
    console.log(i);
}

// Array with methods

let names= ["sailaja","abhi","nani"];
console.log(names.at(1));
console.log(names.pop());
console.log(names.push("chinnu"));
names[1]="ishan";
console.log(names);
names.splice(2,0,"jaya");
const newnames= names.slice(1);
console.log(newnames);

// Objects
let user ={
    firstname :"sailaja",
    lastname: "pulagam",
    age: 21,
    isStudent: true,
    sayMsg: function() {
        console.log("This is fun to do");
    }
};
user.projects= ["cloud chat app","online book store"];

console.log(user);
user.sayMsg();

// Array of objects
let students = [
    { name: "Neha", age: 20, skills: ["JS", "HTML"] },
    { name: "Manasa", age: 21, skills: ["React", "CSS"] },
    { name: "Kavya", age: 22, skills: ["Node", "SQL"] }
];

for (let student of students) {
    console.log(student.name, "skills:", student.skills.join(", "));
}

/* Pattern Printing
let i,j,n=5;
let row;
for(i=1;i<=n;i++){
    row="";
    for(j=1;j<=n;j++){
        row=row+"*";
    }
    console.log(row);
}
*/