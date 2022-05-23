const toDoForm=document.getElementById('todo-form');
const toDoList=document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY='todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function delteToDo(event) {
    const li = (event.target.parentElement);
    li.remove();
    toDos=toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function handleToDoSumit(event){
    event.preventDefault();
    const newTodo= toDoInput.value;
    toDoInput.value='';
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id=newTodo.id;
    console.log(newTodo.id)
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerText = newTodo.text;
    button.innerText='X';
    button.addEventListener('click',delteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.addEventListener('submit',handleToDoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}





