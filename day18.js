let data = {
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}
console.log(data.employees[1].firstName + " " + data.employees[1].lastName);


fetch("https://catfact.ninja/fact")
.then((result)=> (result.text()))
.then(txt => { 
    let parsed = JSON.parse(txt);
    console.log(parsed);})
.catch(()=> console.log("API failed"));



async function fetchData() {
    const data = await fetch("https://catfact.ninja/fact");
    const txt = await data.json();
    console.log(txt);
}
fetchData();