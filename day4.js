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

// Pattern Printing
let i,j,n=5;
let row;
for(i=1;i<=n;i++){
    row="";
    for(j=1;j<=n;j++){
        row=row+"*";
    }
    console.log(row);
}
