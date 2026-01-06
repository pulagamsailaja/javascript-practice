const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Add task
function addTask() {
    const taskText = inputBox.value.trim();
    if (!taskText) {
        alert("You must write something!");
        return;
    }

    createTask(taskText, false); // new task is unchecked
    inputBox.value = "";
    saveData();
}

// Create task element
function createTask(text, checked) {
    const li = document.createElement("li");
    li.textContent = text;
    if (checked) li.classList.add("checked");

    const span = document.createElement("span");
    span.textContent = "\u00d7"; // delete icon
    li.appendChild(span);

    listContainer.appendChild(li);
}

// Event delegation for checking & deleting
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save tasks in localStorage
function saveData(){
    const tasks = [];
    listContainer.querySelectorAll("li").forEach(li => {
        tasks.push({ text: li.firstChild.textContent, checked: li.classList.contains("checked") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function showTask(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    listContainer.innerHTML = "";
    tasks.forEach(t => createTask(t.text, t.checked));
}

// Add task on Enter key
inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter") addTask();
});

// Initial load
showTask();
