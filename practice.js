document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit btn btn-success" onclick="editTask(this)">Edit</button>
                <button class="delete btn btn-danger" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const newTaskText = prompt('Edit task:', li.firstElementChild.textContent);
    if (newTaskText !== null) {
        li.firstElementChild.textContent = newTaskText.trim();
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
