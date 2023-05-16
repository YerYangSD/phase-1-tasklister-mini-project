// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form");
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     buildToDo(event.target["new-task-description"].value);
//     form.reset();
//   });
// });
// function buildToDo(toDoList) {
//   const ul = document.querySelector("#tasks");
//   const btn = document.createElement("button");
//   btn.addEventListener("click", handleDelete);
//   btn.textContent = "x";
//   ul.textContent = `${toDoList} `;
//   console.log(ul);
//   ul.appendChild(btn);
// }
// function handleDelete(event) {
//   event.target.parentNode.remove();
// }

document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();
  //console.log(event);
  const task = event.target[0].value;
  //console.log(task);
  const priorityLevel = parseInt(event.target[1].value);
  //console.log(priorityLevel);
  displayTask(task, priorityLevel);
}

function displayTask(task, priorityLevel) {
  const taskUl = document.getElementById("tasks");
  // console.log(taskUl);
  const taskLi = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteTask);
  taskLi.textContent = `${task} `;
  //console.log(taskLi);
  taskLi.style.color = getPriorityColor(priorityLevel);
  taskLi.appendChild(deleteBtn);
  taskUl.appendChild(taskLi);
}

function deleteTask(event) {
  //console.log(event)
  event.target.parentNode.remove();
}

function getPriorityColor(priorityLevel) {
    //console.log(priorityLevel);
    if (priorityLevel === 1) {
      return "red";
    } else if (priorityLevel === 2){
      return "orange";
    } else {
      return "yellow";
    }
}