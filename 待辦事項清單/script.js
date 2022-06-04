const form = document.getElementById("form");
const input = document.getElementById("input");
const todoListEL = document.getElementById("todo-list");
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach(todo => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }
  if (todoText.trim() !== "") {
    const todoEl = document.createElement("li");
    todoEl.classList.add("todo");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.textContent = todoText;
    todoListEL.appendChild(todoEl);
    input.value = "";
    updateLocalStorage();
    
    // 左鍵點擊完成
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLocalStorage();
    });
    // 右鍵刪除
    todoEl.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      todoEl.remove();
      updateLocalStorage();
    });
  }
}

function updateLocalStorage() {
  const todosEL = document.querySelectorAll("li");
  const todos = [];
  todosEL.forEach(todoEl => {
    todos.push({
      text: todoEl.textContent,
      completed: todoEl.classList.contains("completed")
    })
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}