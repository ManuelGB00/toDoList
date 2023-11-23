const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

class ToDo {
  constructor(task, done) {
    this.task = task;
    this.done = done;
  }
}

function addTask(task) {
  const newTask = new ToDo(task, false);
  toDoList.push(newTask);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  updateTodoList();
}

function removeTask(task) {
  const newList = toDoList.filter((item) => item.task !== task.task);
  toDoList.splice(0, toDoList.length, ...newList);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  updateTodoList();
}

function updateTodoList() {
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = "";

  for (const task of toDoList) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = task.task;

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
    taskInput.value = "";
  }
});

updateTodoList();
