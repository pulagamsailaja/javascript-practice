"use strict";

// Strings
let name = "  sailaja pulagam  ";

console.log(name.length);                 
console.log(name.toUpperCase());          
console.log(name.toLowerCase());           
console.log(name.trim());                  

let cleanName = name.trim();
console.log(cleanName.includes("saila"));  
console.log(cleanName.startsWith("sai"));  
console.log(cleanName.endsWith("gam"));    

// slice & substring
console.log(cleanName.slice(0, 7));       
console.log(cleanName.substring(0, 7));   

// split & join
let words = cleanName.split(" ");
console.log(words);

let joined = words.join("-");
console.log(joined);

// Template literals
let age = 21;
console.log(`My name is ${cleanName} and I am ${age} years old`);


// Numbers & Math
let num = 7.6;

console.log(Math.round(num));   
console.log(Math.floor(num));   
console.log(Math.ceil(num));    

let scores = [45, 88, 92, 67, 99];
console.log(Math.max(...scores)); 
console.log(Math.min(...scores)); 

// Random number (0–9)
let randomNum = Math.floor(Math.random() * 10);
console.log("Random:", randomNum);

// Random OTP (4 digits)
let otp = Math.floor(1000 + Math.random() * 9000);
console.log("OTP:", otp);

// Decimal formatting
let price = 123.45678;
console.log(price.toFixed(2)); 