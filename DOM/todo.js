function addToDo() {
    //   console.log("working")
    var res = document.getElementById("inputToDo").value
    //  console.log(res)
    var todoList = document.getElementById('todoList');

    // LI TAG 
    var todoItem = document.createElement('li');
    todoItem.setAttribute('class', 'list-group-item d-flex justify-content-between');

    //span Tag
    var TodoTextTag = document.createElement('span');
    var TodoText = document.createTextNode(res);
    TodoTextTag.appendChild(TodoText);

    //button
    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btn btn-dark');
    deleteBtn.setAttribute('onclick', 'deleteTodo(this)');
    var btnText = document.createTextNode('Delete');
    deleteBtn.appendChild(btnText)

    todoItem.appendChild(TodoTextTag);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem)

    document.getElementById("inputToDo").value = '';
}

function deleteTodo(e) {
    e.previousSibling.setAttribute('class', 'text-decoration-line-through')
}

