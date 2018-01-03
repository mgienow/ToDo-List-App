var todoList = {
  todos: [`item 1`, `item 2`, `item 3`],
  displayTodos: function() {
  console.log(`My todos: ${this.todos}`)
    },
  addTodo: function(newTodo) {
    this.todos.push(newTodo)
    this.displayTodos()
    },
  changeTodo: function(position, newValue){
    this.todos[position] = newValue
    this.displayTodos()
    },
    deleteTodo: function(position){
      this.todos.splice(position, 1)
      this.displayTodos()
    }
}

/*
Version 3: Objects
Requirements:
It should store the todos array on an Object
It should have a displayTodos method
It should have an addTodos method
It should have a change Todo method
It should have a deleteTodo method

*/