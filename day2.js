"use strict";
 //Type Conversion

//1.String Conversion
let value = true;
alert(typeof value);

value = String("SAILAJA");
alert(typeof value);

//2.Numeric Coversion
let number ="123";
alert(typeof number);

let num = Number(number);
alert(typeof num);

//3.Boolean Conversion
let str="Sailaja";
alert(typeof Boolean(str));


//Basic Operators
let x=5;
x = -x;
console.log(x);

let y=3;
console.log(x+y);

let y1 = y*y+1;
console.log(y1);

let n=2;
n+=5;
n*=2;
console.log(n);

//3.Comparison
console.log(3>2);
console.log(3<2);
console.log('sailaja'> 123);

//4.Conditional Operators
 let VoteEligibility;
 let age = prompt('Enter your age:','');
 if(age>=18)
 { alert('Eligible to vote');
    VoteEligibility='True';
 }
 else
 { alert('Not Eligible');
    VoteEligibility='False';
 }
console.log(VoteEligibility);

 //5.Logical Operators
if(1&&1)
{ alert(true);
}

if(1||0)
{ alert(true);
}

if(!0)
{ alert(true);
}
