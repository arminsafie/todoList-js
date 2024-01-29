//getting elemnts

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

const completeTask = (btn) => {
  const task = btn.parentElement;
  task.classList.toggle("completed");
};
const removeTask = (btn) => {
  const task = btn.parentElement;
  taskList.removeChild(task);
};
const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === " ") {
    alert("please eneter a task");
    return;
  }
  const newTask = document.createElement("li");
  newTask.innerHTML = `
    <span>${taskText}</span>
    <button class="btn" onclick="completeTask(this)">Complete</button>
    <button class="btn" onclick="removeTask(this)">Remove</button>
  
  `;
  taskList.appendChild(newTask);
  taskInput.value = "";
};
