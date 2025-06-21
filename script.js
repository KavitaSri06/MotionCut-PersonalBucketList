// Add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            taskText.classList.toggle('completed', checkbox.checked);
        });

        // Create task text
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.backgroundColor = 'red';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.borderRadius = '5px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.addEventListener('click', () => {
            taskDiv.remove();
        });

        // Append elements
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);

        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Preload sample tasks
window.onload = function () {
    const sampleTasks = [
       "Start a passion project and launch it",
        "Go on a solo trip",
        "Watch sunrise from a mountain top",
        "Master a new language",
        "Do a 30-day digital detox"
    ];
    sampleTasks.forEach(task => {
        document.getElementById('taskInput').value = task;
        addTask();
    });
};
