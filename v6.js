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
    },
    toggleAll: function(){
      let totalTodos = this.todos.length
      let completedTodos = 0
      
      //get number of completed todos:
      for(let i=0; i<totalTodos; i++){
        if(this.todos[i].completed === true){
          completedTodos++
        }
      }
      //Case 1: if everything is true, make everything false
      if (completedTodos === totalTodos){
        for(let i=0; i<totalTodos; i++){
          this.todos[i].completed = false
        }
      } else {
        for(let i=0; i<totalTodos; i++){
          this.todos[i].completed = true
        }
        
      }
      this.displayTodos()
    }
}

/*
Version 6: toggleAll.  if everything is true, make everything false; else, make everything true

*/