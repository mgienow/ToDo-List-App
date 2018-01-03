var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0) {
      console.log(`Your ToDo List is empty!`)
    } else {
      console.log(`My todos:`)
    for(let i=0; i<this.todos.length; i++){
      if(this.todos[i].completed === true){
        console.log(`(x) ${this.todos[i].todoText}`)
          } else {
        console.log(`( ) ${this.todos[i].todoText}`)
          }
        }
      }
    },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos()
    },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos()
    },
    deleteTodo: function(position){
      this.todos.splice(position, 1)
      this.displayTodos()
    },
    toggleCompleted: function(position){
      let todo = this.todos[position]
      todo.completed = !todo.completed
      this.displayTodos();
    }    
}

/*
Version 5: Loops of Logic
- displayTodos should show todoText
- displayTodos should tell you if the todos object is empty
- displayTodos should show if a To Do is completed or not
*/