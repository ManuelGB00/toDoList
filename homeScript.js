import{ToDoList} from "toDoList.js";

const keyName="chiaveToDoList1234";
const tasks=JSON.parse(localStorage.getItem(keyName))??[];
const todoList=document.querySelector("#todo-list");
popolaListaFront(tasks);


//eventListener all'inserimento di una nuova task
document.querySelector("#add").addEventListener("click", function (e) {
    let taskText=document.querySelector("#taskInput").value;
    addTaskToList(taskText);

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
      }
      
    popolaListaFront(tasks);
});

//funzione per aggiungere il testo ad un oggetto ed aggiungere l'oggetto all'array di tasks
function addTaskToList(taskText){
    let nuovaTask=new ToDoList(taskText);
    tasks.push(nuovaTask);
    localStorage.setItem(keyName, JSON.stringify(tasks));
}

function popolaListaFront(tasks){
    for(taskSingola of tasks){
        let li=document.createElement("li");
        li.textContent=taskSingola.task;
        todoList.appendChild(li);

    }
    
}
