const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todos = []

function newTodo() {
  const name = prompt('Please input the new todo name:')
  addTodo(name)
}

function render() {
  // render the todos in memory to the page
  list.innerHTML = ''
  todos.forEach(todo => list.appendChild(todo))

  // update counts
  updateCounts()
}

function addTodo(name) {
  const todo = new Todo(name)
  todos.push(todo)

  render()
}

function updateCounts() {
  updateAllCount()
  updateUncheckedCount()
}

function updateAllCount() {
  const size = todos.length

  itemCountSpan.innerHTML = size
}

function updateUncheckedCount() {
  const unchecked = todos.filter(todo => !todo.querySelector("input").checked)

  uncheckedCountSpan.innerHTML = unchecked.length
}

function removeTodo(button) {
  const deletedTodo = button.parentElement
  todos = todos.filter(todo => todo !== deletedTodo)
  render()
}
