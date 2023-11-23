const toDoList = [];

class ToDo {
  constructor(task, done) {
    this.task = task;
    this.done = done;
  }
}

function addTask(task) {
  const newTask = new ToDo(task, false);
  toDoList.push(newTask);
  // Set in local storage the todolist
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  updateTodoList();
}

function removeTask(task) {
  const localStorageList = JSON.parse(localStorage.getItem("toDoList")) ?? [];
  const newList = localStorageList.filter((item) => item.task !== task.task);
  localStorage.removeItem("toDoList");
  // Update the localStorage with the modified list
  localStorage.setItem("toDoList", JSON.stringify(newList));
  updateTodoList();
}

function updateTodoList() {
  console.log(localStorage.getItem("toDoList"));
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = "";

  const localStorageList = JSON.parse(localStorage.getItem("toDoList")) ?? [];
  for (const task of localStorageList) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = task.task;

    // Add a click event listener to each list item
    listItem.addEventListener("click", function () {
      removeTask(task);
    });
    todoListElement.appendChild(listItem);
  }
}

const btnAdd = document.getElementById("add");

btnAdd.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const newTaskText = taskInput.value.trim();

  if (newTaskText !== "") {
    addTask(newTaskText);
    taskInput.value = ""; // Clear the input field after adding the task
  }
});

updateTodoList();
