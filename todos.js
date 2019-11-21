var listElemento = document.querySelector('#app ul');
var inputElemento = document.querySelector('#app input');
var buttonElemento = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

    listElemento.innerHTML = '';
    todos.map(todo => {

      var todoElemento = document.createElement('li'); 
      var linkElemento = document.createElement('a');
      
      
      var pos = todo.indexOf(todo);
      linkElemento.setAttribute('onclick', `deleteTodo(${pos})` );

      var textLink = document.createTextNode('Excluir');
      var textTodo = document.createTextNode(todo);

      linkElemento.appendChild(textLink);
      linkElemento.setAttribute('href', '#');

      todoElemento.appendChild(textTodo);
      listElemento.appendChild(todoElemento);
      todoElemento.appendChild(linkElemento);
  });
}

renderTodos();

function addTodo() {
  var todoTexto = inputElemento.value;

  todos.push(todoTexto);
  inputElemento.value = '';

  renderTodos();
  saveToStorage();
}

buttonElemento.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {  
  localStorage.setItem('list_todos', JSON.stringify(todos));
}