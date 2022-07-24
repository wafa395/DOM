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
    editButton.addEventListener('click', () =>
        editTodo(randomId));   
    

    // add title and delete and edit to li
    parentLi.append(todoSpanTitle, deleteButton, editButton);
    todoList.append(parentLi);
}

// *************************************************
let span;
const sButton = document.getElementById('sBut');
const fButton = document.getElementById('fBut');

function editTodo(randomId) {
    const todoItemee = document.getElementById(`${randomId}`);
    
    span = todoItemee.firstChild;
    // console.log(span);
    document.getElementById('todo-item').value = span.textContent;
    sButton.classList.remove('hidden-item');
    
    
    if (!fButton.classList.contains('hidden-item')) {
        fButton.classList.add('hidden-item');
    }
}

function editTodoBut() {
    editableTodoItem = document.getElementById('todo-item');
    span.textContent = editableTodoItem.value;
    editableTodoItem.value = ' ';
    sButton.classList.add('hidden-item');
    fButton.classList.remove('hidden-item');
    
}

// *************************************************




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


function searchTodo(){
    let input, filter, ul, li, span , txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("main-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


searchTodo();