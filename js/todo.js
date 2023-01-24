const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
console.log("asd");
