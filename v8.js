/*First objective for v8: refactor from individual event handler functions in JS tied
to getElemetByID in markup, to creating a handlers object and using 'onclick' attribute to
access the DOM from JS

Second commit: addTodoText button and text input to handlers object and markup
*/
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

// //1. we want access to our display todos method
//   var displayTodosButton = document.getElementById('displayTodosButton');
//   console.log(displayTodosButton);
// //2. we want to run display todos when button is clicked
// //to do this, ADD EVENT LISTENER
//   displayTodosButton.addEventListener('click', function(){
//       todoList.displayTodos();
//   });

//   var toggleAllButton = document.getElementById('toggleAllButton');
//   console.log(toggleAllButton)
//   toggleAllButton.addEventListener('click', function(){
//       todoList.toggleAll();
//   });

var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function () {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  }
};









// <!DOCTYPE html>
// <html>
//
//   <head>
//     <link rel="stylesheet" href="style.css">
//
//   </head>
//
//   <body>
//     <h1>ToDo List</h1>
//
//     <button onclick="handlers.displayTodos()">Display ToDos</button>
//     <button onclick="handlers.toggleAll()">Toggle All</button>
//
//     <div>
//       <button onclick ="handlers.addTodo()">Add</button>
//       <input type ="text" id="addTodoTextInput">
//     </div>
//
//   <script src="script.js"></script>
//   </body>
// </html>
