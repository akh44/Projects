let input = prompt('What would you like to do?');
const todos = ['Study', 'Gymming', 'Basketball', 'Meeting', 'Cooking'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`); // Ensure backticks are correct
        }
        console.log('*****************');
    } else if (input === 'new') {
        const newTask = prompt('Enter the new todo, please');
        todos.push(newTask); // Add the new task
        console.log(`${newTask} has been added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter the index to delete:'));
        if (!Number.isNaN(index) && index >= 0 && index < todos.length) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} has been deleted`);
        } else {
            console.log('Enter a valid number');
        }
    }
    input = prompt("What would you like to do?"); // Prompt the user again until they quit
}

console.log('QUITTING THE APP');
