// const todoList = document.querySelector('#todo-list ul');

// // create li element 
// const parentLi = document.createElement('li');

// // create todo title 
// const todoSpanTitle = document.createElement('span');
// todoSpanTitle.textContent = 'my new TODO';

// // create delete button
// const deleteButton = document.createElement('button');
// deleteButton.textContent = 'delete';
// deleteButton.classList.add('actions');

// // create edit button
// const editButton = document.createElement('button');
// editButton.textContent = 'edit';
// editButton.classList.add('actions');
// // add title and delete and edit to li
// parentLi.append(todoSpanTitle, deleteButton, editButton);



// // create li element 
// const parentLi2 = document.createElement('li');

// // create todo title 
// const todoSpanTitle2 = document.createElement('span');
// todoSpanTitle2.textContent = 'my new TODO22';

// // create delete button
// const deleteButton2 = document.createElement('button');
// deleteButton2.textContent = 'delete';
// deleteButton2.classList.add('actions');

// // create edit button
// const editButton2 = document.createElement('button');
// editButton2.textContent = 'edit';
// editButton2.classList.add('actions');
// // add title and delete and edit to li
// parentLi2.append(todoSpanTitle2, deleteButton2, editButton2);

// // add li to todo list
// todoList.append(parentLi);
// todoList.append(parentLi2);
function buildNewTodo(value) {
    const todoList = document.querySelector('#todo-list ul');
    // create li element 
    const parentLi = document.createElement('li');

    // create todo title 
    const todoSpanTitle = document.createElement('span');
    todoSpanTitle.textContent = value;
    const randomId = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
    parentLi.setAttribute('id', randomId);
    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('actions');
    deleteButton.addEventListener('click', () => {
        deleteTodo(randomId);
    });
    // create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.classList.add('actions');
    // add title and delete and edit to li
    parentLi.append(todoSpanTitle, deleteButton, editButton);
    todoList.append(parentLi);
}

function deleteTodo(randomId) {
    const todoItem1 = document.getElementById(`${randomId}`);
    todoItem1.remove();
}

function addNewTodo() {
    const todoItem = document.getElementById('todo-item');
    const warning = document.getElementById('warning');
    const todoItemValue = todoItem.value;
    if (!todoItemValue.length) {
        warning.classList.remove('hidden-item');
        return;
    }
    if (!warning.classList.contains('hidden-item')) {
        warning.classList.add('hidden-item');
    }
    buildNewTodo(todoItemValue);
    todoItem.value = '';
}

// const lastTodo = document.querySelector('#todo-list ul li:last-child');
// // console.log(lastTodo);
// lastTodo.remove();

// function Add() {
//     const task = document.getElementById('text-action').value;
//     let taskStore = JSON.parse(localStorage.getItem('task')) || [];
//     taskStore.push(task);
//     localStorage.setItem('task', JSON.stringify(taskStore));

//     const todoList = document.querySelector('#todo-list ul');

//     // create li element 
//     const parentLi = document.createElement('li');

//     // create todo title 
//     const todoSpanTitle = document.createElement('span');
//     todoSpanTitle.textContent = taskStore;

//     // create delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'delete';
//     deleteButton.classList.add('actions');

//     // create edit button
//     const editButton = document.createElement('button');
//     editButton.textContent = 'edit';
//     editButton.classList.add('actions');
//     // add title and delete and edit to li
//     parentLi.append(todoSpanTitle, deleteButton, editButton);
    
//     todoList.append(parentLi);
//     // const lastTodo = document.querySelector('#todo-list ul li:last-child');
// }