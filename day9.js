"use strict";
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.links);
*/

// console.log(document.getElementById("header"));
let header=document.getElementById("header");
header.innerHTML = "REGISTER FORM";
header.style.fontFamily = "Times New Roman";
 
let dept= document.getElementById("dept");
 dept.textContent="Department";

 let button= document.getElementsByClassName("btn");
for (let i = 0; i < button.length; i++) {
    button[i].style.fontSize = "14px";
}

let inputs= document.getElementsByTagName("input"); 
for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.padding = "5px";
    inputs[i].style.margin = "5px";
}
console.log(inputs);

let submitBtn = document.querySelector('button');
submitBtn.innerHTML = "Register Now";

function check() {
  let pwd = document.getElementById("pwd").value;
  let msg = document.getElementById("msg");

  if (pwd.length < 6) {
    msg.textContent = "Weak password";
    msg.style.color = "red";
  } else {
    msg.textContent = "Strong password";
    msg.style.color = "green";
  }
}

let pwd2 = document.getElementById("pwd2");
let msg2 = document.getElementById("msg2");

pwd2.addEventListener("input", function () {
  if (pwd.value !== pwd2.value) {
    msg2.textContent = "Passwords do not match";
    msg2.style.color = "red";
  } else {
    msg2.textContent = "Passwords match";
    msg2.style.color = "green";
  }
});
