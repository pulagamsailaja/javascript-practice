"use strict";

// promises and async/await
async function getData() {
  return "Data received";
}

let result = await getData();
console.log(result);


// using await with real promises
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Fetched data");
    }, 2000);
  });
}

async function showData() {
  let data = await fetchData();
  console.log(data);
}

showData();


// error handling with try/catch
async function loadData() {
  try {
    let result = await Promise.reject("Failed!");
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();


//task1
async function runTask() {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve("Done"), 2000);
  });

  const result = await promise;
  console.log(result);
}

runTask();

//task2
async function checkAge(age) {
  try {
    if (age >= 18) {
      return "Access granted";
    } else {
      throw new Error("Too young!");
    }
  } catch (error) {
    console.error(error.message);
  }
}

checkAge(16); // Logs: "Too young!"

//task3
const wait = (ms) => new Promise(res => setTimeout(res, ms));

async function sequence() {
  console.log("Step 1");
  await wait(1000);
  
  console.log("Step 2");
  await wait(1000);
  
  console.log("Finished");
}

sequence();
