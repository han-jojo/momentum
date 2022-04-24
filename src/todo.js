const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const todoContent = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: todoContent,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  printTodoList(newTodoObj);
  saveToDos();
}

function printTodoList(todoContent) {
  const li = document.createElement("li");
  li.id = todoContent.id;
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todoContent.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id, 10));
  li.remove();
  saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(printTodoList);
}
