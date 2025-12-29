"use strict";
//Loops
//1.For 
let n=10;// used as global varaible for all the loops
for (let i = 0; i < n; i++) {
    console.log(i);
}

//2.While
let i=1;
while(i<n) {
    console.log(i);
    i++;
}

//3.Do while
do {
    console.log(i);
    i++;
}
while(i<n);

//4.Break
for( let i=0;i<=n;i++) {
    console.log(i);
    break;
}

//Switch Case
let day=3;
switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid Day');
        break;
}

//Functions
//1.Function Declaration
function showMsg() {
    console.log('Hello. Today is Day 3');
}
showMsg();

//2.Function with parameters
function showMessage(from,text) {
console.log(from + ':'+ text);
}
showMessage('sailaja','pulagam');

//3.Function with return
function diff(a,b){
    return a-b;
}
console.log(diff(10,5));

//4. Function Expression
let multiply = function(a,b) {
    return(a*b);
}
console.log(multiply(5,6));

//5.Arrow Function
let double = n =>n*2;
console.log(double(7));