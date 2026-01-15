"use strict";

// Asynchronous function using callbacks (Callback Hell)
function loadDashBoard(id, callback) {
    let error;

    setTimeout(() => {
        if (error) {
            return callback(error);
        }
    }, 2000);

         setTimeout(() => {
        if (error) {
            return callback(error);
        }
        console.log("Fetching User Data");
        
        setTimeout(() => {
            if (error) {
                return callback(error);
            }
            console.log("Fetching User Posts");
            
            setTimeout(() => {
                if (error) {
                    return callback(error);
                }
                console.log("Fetching User Comments");
                
                setTimeout(() => {
                    if (error) {
                        return callback(error);
                    }
                    console.log("Fetching User Likes..");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

function ErrorHandler(error) {
    console.log("An error occurred while fetching data.");
}
loadDashBoard(1, ErrorHandler);

// The above code demonstrates "Callback Hell" due to nested callbacks making it hard to read and maintain.

//Promises
const myOrder = new Promise((resolve, reject) => {
  let success = false; 
  if (success) {
    resolve("Coffee is ready! ☕");
  } else {
    reject("Sorry, we are closed. ❌");
  }
});

myOrder
  .then(result => console.log(result))
  .catch(error => console.log(error));

  //Promise chaining

  //challenge1
  const simplePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

simplePromise.then((message) => console.log(message));

//challenge2
const checkNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10!`);
    } else {
      reject(`${num} is too small.`);
    }
  });
};

checkNumber(15).then(output => console.log(output)).catch(console.error);


//challenge3
Promise.resolve(5)
  .then((num) => num * 2) // multiply by 2 (10)
  .then((num) => num + 3) // add 3 (13)
  .then((finalResult) => console.log("Final Result:", finalResult));
