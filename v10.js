var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything’s true, make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {

    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeletButton: function() {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.className = 'deleteButton';
      return deleteButton;
  }
};

let todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      //Get the element that was clicked on:
    let elementClicked = event.target;
    //check to make sure it is a delete button:
      if (elementClicked.className === 'deleteButton'){
    //run handlers.deleteTodo(position)
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
})
//v10.1: starting at line 95, added createDeletButton method on the view object to
//have a way for a delete button to appear in the app

//v10.2: line 93, took the todoLi and used appendChild to add the
//createDeleteButton() method to displayTodos, so that every time a newTodo
//item is created it will have its own delete buttons

// v10.3: in line 92 (which pushes down our refs to lines 93 & 95 above, lol)
// we append an id element to todoLi -- todoLi.id -- and set it equal to i
// so that every time the for loop iterates, i will be unique for each Li created

// EVENT DELEGATION:  
// v10.4: line 105, establish new todosUl variable so we can grab the Ul
// from the markup and put an event listener on it. All our todo items are child Li's
// of the UL, so if they are clicked it registers on the parent node, Ul

//then make sure that what was clicked was a delete button, and not something else in the UL,
//by creating a var called elementClicked that uses the target attribute assigned
//by the browser to that element (in control panel) : event.target returns whatever
//was clilcked

//then if that is true, go to handlers and get the deleteTodo method and pass
//in as ar elementClicked's parentNode and the id on it

//note: elementClicked.parentNode.id returns a string so you need parseInt()
//to make sure it's passed as a number to the event handler function
