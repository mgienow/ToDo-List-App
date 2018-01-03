//storing todos:
var todos = [`item 1`, `item 2`, `item 3`],
//displaying todos:
  console.log(`My todos: ${this.todos}`)
//adding Todos;
    todos.push(newTodo)
//changing todos:
    todos[position] = newValue
//deleting todos:
    todos.splice(position, 1)
    



/*
Version 1 - Arrays
Requirements: 
It should have a place to store todos
It should have a way to display todos
It should have a way to add new todos
It should have a way to change a todo
It should have a way to delete a todo

concepts to retain: 
todos.push('item 1')
todos.splice(position, 1) <-- the second arg is the number of index positions to remove starting from the position that is passed in
