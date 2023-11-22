import{ToDoList} from "toDoList.js";
const keyName="chiaveToDoList1234";
const tasks=localStorage.getItem(keyName);


document.querySelector("#add").addEventListener("click", function (e) {
    let taskText=document.querySelector("input");
    addTaskToList(nuovaTask);
})

function addTaskToList(taskText){
    let nuovaTask=new ToDoList(taskText);
    tasks.push(nuovaTask);
}