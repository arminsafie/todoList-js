// Getting elements
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const removeAllBtn = document.getElementById("remove-all");

// Functions
const completeTask = (task) => {
  const taskTextElement = task.querySelector("span");
  taskTextElement.classList.toggle("completed");
};

const removeTask = (task) => {
  taskList.removeChild(task);
};

const removeAllHandler = () => {
  taskList.innerHTML = "";
};

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const newTask = document.createElement("li");
  newTask.innerHTML = `
    <span>${taskText}</span>
    <div class="d-flex">
      <button class="btn-2" onclick="completeTask(this.closest('li'))">&#9745;</button>
      <button class="btn" onclick="removeTask(this.closest('li'))">Delete</button>
    </div>
  `;

  taskList.appendChild(newTask);
  taskInput.value = "";
};

// Event listeners
removeAllBtn.addEventListener("click", removeAllHandler);
