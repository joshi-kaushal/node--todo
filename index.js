const yargs = require('yargs');
const _ = require('loadsh');
const todo = require('./todo');

const fs = require('fs')
const argv = yargs.argv;

let command = argv._[0];

console.log(`This is a simple todo application developed using Node JS.
to try out, open terminal and type:
node index.js <command> --title="<task name">
Available commands: 
  - addTodo
  - deleteTodo
  - readTodo
  - listTodos\n\n`);

if (command === 'addTodo') {
    todo.addTodo(argv.title);
} else if (command === 'deleteTodo') {
    let todoDeleted = todo.deleteTodo(argv.title);
    let message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
    console.log(message);
} else if (command === 'readTodo') {
    let input = todo.readTodo(argv.title);
    if (input) {
        console.log('Great! The todo was found.');
        todo.logTodo(input);
    } else {
        console.log('Whoops! The todo was not found.');
    }
} else if (command === 'listTodos') {
    var allTodos = todo.listTodos();
    console.log(`Printing ${allTodos.length} todo(s).`);
    allTodos.forEach((input) => todo.logTodo(input));
} else {
    console.log('Invalid command.');
}