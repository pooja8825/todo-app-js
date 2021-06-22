let todoItems = [];
const form = document.querySelector('.js-form');
const ul = document.querySelector('.js-todo-list');



function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);  
  console.log(todoItems);

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);

}

form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});