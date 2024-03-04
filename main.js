const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  if (taskInput.value.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = taskInput.value.trim();
    taskItem.appendChild(taskText);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteTask);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function deleteTask(e) {
  const taskItem = e.target.parentElement;}