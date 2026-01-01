"use strict";

//Map
let num =[1,2,3,4];
let res = num.map( x => x *2);
console.log(num);
console.log(res);

//filter
let result = num.filter ( x=> x%2===0);
console.log(result);

//reduce
let total = num.reduce((total,x )=> total+x,0);
console.log(total);

//find
let findnum = num.find( x=>x>2);
let findnumindex =  num.findIndex(x=> x=2);
console.log(findnum);

//some
let numbers =[ 85,90,72,67];
let gradeA = numbers.some( x=> x>80);
console.log(gradeA);

//every
let gradeB = numbers.every(x=> x>70);
console.log(gradeB);

//sort
let cities=["Hyderabad","Bangalore","Chennai","Delhi"];
console.log(cities);
cities.sort();
console.log(cities);