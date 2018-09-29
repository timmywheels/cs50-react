const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');


function renderTodo(todo) {
    // render single todo
}


function createTodo() {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" />
        <button>delete</button>
        <span>text</span>
    `
}

function newTodo() {
    // get text
    // create li
    // create input checkbox
    // create button
    // create span
    // update counts

}

function deleteTodo() {
    // find todos to delete
    // delete
    // update the counts
}

