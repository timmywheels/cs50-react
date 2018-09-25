const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let itemCount = 0;
let uncheckedCount = 0;

function increaseItemCount() {
  itemCount++;
  itemCountSpan.innerHTML = itemCount.toString();
}

function decreaseItemCount() {
  itemCount--;
  itemCountSpan.innerHTML = itemCount.toString();
}

function increaseUncheckedCount() {
  uncheckedCount++;
  uncheckedCountSpan.innerHTML = uncheckedCount.toString();
}

function decreaseUncheckedCount() {
    if (uncheckedCount !== 0) {
      uncheckedCount--;
      uncheckedCountSpan.innerHTML = uncheckedCount.toString();
    }
}


list.addEventListener('click', (e) => {
  // console.log('e.target', e.target);
  console.log('e.target.checked:', e.target.checked);
  if (e.target.classList.contains('todo-delete')) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      if (itemCount === uncheckedCount) {
        decreaseUncheckedCount();
      }
      decreaseItemCount();
  }

  if (e.target.type === 'checkbox') {

    if (e.target.checked === true && uncheckedCount !== 0) {
      decreaseUncheckedCount();
    }
    if (e.target.checked === false) {
      increaseUncheckedCount();
    }

  }

});

function newTodo() {
  let todo = window.prompt("Enter a todo: ");
  const item = document.createElement('li');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add(classNames.TODO_CHECKBOX);

  item.classList.add(classNames.TODO_ITEM);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add(classNames.TODO_DELETE);
  deleteBtn.innerHTML = 'x'

  if (todo) {
    item.innerHTML = todo;
    increaseItemCount();
    increaseUncheckedCount();

  } else {
      alert("Please enter a todo.");
      return;
  }
  item.appendChild(checkBox);
  item.appendChild(deleteBtn);
  list.appendChild(item);
}
