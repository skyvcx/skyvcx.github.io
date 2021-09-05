const todoForm=document.querySelector("#todoform")
const todoInput=document.querySelector( "#todoform input")
const greeting3=document.querySelector("#greeting3")
const totol = document.querySelector("#todo-list")

let todoarray=[];
 
const TODOS_KEY="toDos";
todoForm.addEventListener("submit",sub)


function savetodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todoarray));

}


function sub(event){
    event.preventDefault();

    const toto = todoInput.value
    todoInput.value="";

    const NewTodoObj ={
        text:toto,
        id:Date.now()
    }
    todoarray.push(NewTodoObj);
    paintTodo(NewTodoObj);
    savetodo();
   
}


function paintTodo(toto){
    const li = document.createElement("li")
    li.id=toto.id;
    const span = document.createElement("span")
    span.innerText=toto.text;
    const button = document.createElement("button")
    button.innerText= "✖"
    button.addEventListener("click",deletetodo)
    li.appendChild(span);
    li.appendChild(button);
    totol.appendChild(li);
}

function deletetodo(event){
    const li = event.target.parentElement;
    
    li.remove()
    todoarray = todoarray.filter((todo) => todo.id !== parseInt(li.id));
    savetodo();
}





const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    todoarray=parsedToDos;
    parsedToDos.forEach(paintTodo);
        
}

