// Add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Check if the input is not empty
    if (taskInput.value.trim() !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskText.classList.add('completed');
            } else {
                taskText.classList.remove('completed');
            }
        });

        // Create the task text
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        // Append checkbox and text to the task
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskText);

        // Append task to the task list
        taskList.appendChild(taskDiv);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}
