document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

let taskObjArray = [];

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
  document.getElementById("sort-tasks").addEventListener("change", sortTasks);
}

function handleFormSubmit(event) {
  event.preventDefault();
  //console.log(event);
  const task = event.target[0].value;
  //console.log(task);
  const priorityLevel = parseInt(event.target.priority.value);
  //console.log(priorityLevel);
  const taskObj = { task, priorityLevel };
  taskObjArray.push(taskObj);
  //console.log(taskObjArray);
  sortTasks();
  displayTasks();
}

function displayTasks() {
  const taskUl = document.getElementById("tasks");
  taskUl.innerHTML = "";

  taskObjArray.forEach((task) => {
    const taskLi = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", (event) => deleteTask(event, task));

    taskLi.textContent = task.task + " ";
    taskLi.style.color = getPriorityColor(task.priorityLevel);
    taskLi.appendChild(deleteBtn);
    taskUl.appendChild(taskLi);
  });
}

function deleteTask(event, task) {
  //console.log(event)
  taskObjArray = taskObjArray.filter((element) => element.task !== task.task);
  event.target.parentNode.remove();
}

function getPriorityColor(priorityLevel) {
  //console.log(priorityLevel);
  if (priorityLevel === 1) {
    return "red";
  } else if (priorityLevel === 2) {
    return "orange";
  } else {
    return "yellow";
  }
}

function sortTasks() {
  const sortTasksSelect = document.getElementById("sort-tasks");
  if (sortTasksSelect.value === "h-l") {
    taskObjArray.sort((a, b) => a.priorityLevel - b.priorityLevel);
  } else {
    taskObjArray.sort((a, b) => b.priorityLevel - a.priorityLevel);
  }
  displayTasks();
}
