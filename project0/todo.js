class Todo {
  constructor(name) {
    this.name = name || 'New TODO'

    return this.createTodo()
  }

  createTodo() {
    const li = document.createElement('li')
    li.innerHTML = `
      <input type="checkbox" onclick="updateUncheckedCount()" />
      <button onclick="removeTodo(this)">delete</button>
      <span>${this.name}</span>
    `
    return li
  }
}
