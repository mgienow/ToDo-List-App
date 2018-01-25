// v9 Final: escape from the console. Last step of v8
//  was to add the view.displayTodos() method to each of the properties
//   on the handler object. view.displayTodos() presents the todo list
//   in the DOM
//-- then we could get rid of displayTodos method on the handler object itself
// since we were not using it any more (it was visible only in console)
//-- then we had to go to the todoList object itself and remove the displayTodos
// method on that object, as well as removing all instances of 'this.displayTodos()' on
// the todoList methods. Again, all is now taken care of by the views object

var todoList = {
  todos: [],

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });

    },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;

    },
    deleteTodo: function(position){
      this.todos.splice(position, 1)

    },
    toggleCompleted: function(position){
      let todo = this.todos[position]
      todo.completed = !todo.completed
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
    }
}

var handlers = {
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function () {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');

    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.value);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
          var todosUl=document.querySelector('ul');
          todosUl.innerHTML = '';
      for(var i=0; i<todoList.todos.length; i++){
         var todoLi = document.createElement('li');
         var todo = todoList.todos[i];
         var todoTextWithCompletion = '';

         if(todo.completed === true){
           todoTextWithCompletion = '(x) ' + todo.todoText;
         } else {
           todoTextWithCompletion = '( ) ' + todo.todoText;
         }
         todoLi.textContent = todoTextWithCompletion;
         todosUl.appendChild(todoLi);
    }
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
//     <!--<button id="displayTodosButton">Display ToDos</button>-->
//     <!--<button id='toggleAllButton'>Toggle All</button>-->
//
//     <button onclick="handlers.toggleAll()">Toggle All</button>
//     <div>
//       <button onclick ="handlers.addTodo()">Add</button>
//       <input type ="text" id="addTodoTextInput">
//     </div>
//
//     <div>
//       <button onclick="handlers.changeTodo()">Change ToDo</button>
//       <input id="changeTodoPositionInput" type="number">
//       <input id="changeTodoTextInput" type="text">
//     </div>
//
//     <div>
//       <button onclick="handlers.deleteTodo()">Delete ToDo</button>
//       <input id="deleteTodoPositionInput" type="number">
//     </div>
//
//     <div>
//       <button onclick="handlers.toggleCompleted()">Toggle Complete</button>
//       <input id="toggleCompletedPositionInput" type="number">
//     </div>
//
//     <ul></ul>
//
//   <script src="script.js"></script>
//   </body>
// </html>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
