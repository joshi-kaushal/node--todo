const fs = require('fs');


// add Todo
let addTodo = (title) => {
    let todos = [];
    let todo = {
        title
    };

    try {
        let todosString = fs.readFileSync('todos-data.json');
        todos = JSON.parse(todosString);
    } catch (e) {

    }

    let duplicatetodos =todos.filter((todo) => todo.title === title);

    if (duplicatetodos.length === 0) {
       todos.push(todo);
        fs.writeFileSync('todos-data.json', JSON.stringify(todos));
        console.log("Task added!")
    }
};

// delete Todo
let deleteTodo = (title) => {
  let todos = fetchTodos();
  let filteredtodos =todo.filter((todo) => todo.title !== title);
  saveTodos(filteredtodos);

  returntodo.length !== filteredtodos.length;
};

// read todos
let readTodo = (title) => {
    let input = fetchTodos();
    let filteredTodos =input.filter((input) => input.title === title);
    return filteredTodos[0];
};

// reading all the todos
let listTodos = () => {
    return fetchTodos();
};

// utility functions
let fetchTodos = () => {
  try {
    let todosString = fs.readFileSync('todos-data.json');
    return JSON.parse(todosString);
  } catch (e) {
    return [];
  }
};

let saveTodos = (todos) => {
  fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

let logTodo = (todo) => {
    console.log('------');
    console.log(`${todo.title}`);
};

// exported functions
module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    listTodos,
    logTodo
};