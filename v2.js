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
Version 2 - Functions
Requirements: It should have a FUNCTION to:
 - display todos
 - add new todos
 - change a todo
 - delete a todo
*/