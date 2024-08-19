document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; // Clear input
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');

    // Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', function() {
        const newTaskText = prompt('Edit your task:', li.textContent.replace('').trim());
        if (newTaskText !== null && newTaskText.trim() !== "") {
            li.firstChild.textContent = newTaskText;
        }
    });

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);

    li.appendChild(taskButtons);

    // Add the new task to the top of the list
    taskList.insertBefore(li, taskList.firstChild);
}