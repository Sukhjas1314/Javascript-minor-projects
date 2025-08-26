const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click",()=>{

    const newTodoText = newTodoInput.value;

    if(newTodoText!== ""){
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;
        const deletetodoBtn = document.createElement("button");
        deletetodoBtn.innerText = "X";

        deletetodoBtn.classList.add("delete-todo-btn");
        deletetodoBtn.addEventListener("click",function(){
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deletetodoBtn);
        todoList.appendChild(newTodoItem);
        newTodoInput.value = "";
    }
});