"use strict";

// Dates
let today = new Date();
console.log(today);

console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1); 
console.log("Date:", today.getDate());
console.log("Day:", today.getDay()); 

// Calculate age from DOB
let dob = new Date("2005-07-14"); // change to your DOB
let currentYear = today.getFullYear();
let birthYear = dob.getFullYear();

let userAge = currentYear - birthYear;
console.log("Calculated Age:", userAge);

// Difference between two dates
let startDate = new Date("2025-01-01");
let diffMs = today - startDate;
let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

console.log("Days passed since Jan 1, 2025:", diffDays);


function capital(name){
return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}
console.log(capital("Sailaja"));
console.log(capital("NEHA"));

function UserName(first,last){
    return '${first.toLowerCase()}_${last.toLowerCase()}';
}
console.log(UserName("Sailaja","Pulagam"));

function mailId(email){
    return email.includes("@") && email.endsWith(".com");
}

console.log(mailId("sailaja@gmail.com"));
console.log(mailId("sailaja@yahoo.com"));


function generateOTP(){
    return Math.floor(1000 + Math.random()*9000);
}
console.log(generateOTP());
