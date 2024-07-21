document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.cursor = 'pointer';
        removeButton.style.backgroundColor = '#ff6347';
        removeButton.style.color = 'white';
        removeButton.style.border = 'none';
        removeButton.style.borderRadius = '4px';
        removeButton.style.padding = '5px 10px';

        removeButton.onmouseover = function() {
            removeButton.style.backgroundColor = '#d9534f';
        };

        removeButton.onmouseout = function() {
            removeButton.style.backgroundColor = '#ff6347';
        };

        // Function to handle the removal of the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Apply styles to the list item
        listItem.style.backgroundColor = '#eeeeee';
        listItem.style.marginTop = '8px';
        listItem.style.padding = '10px';
        listItem.style.borderRadius = '4px';
        listItem.style.display = 'flex';
        listItem.style.justifyContent = 'space-between';
        listItem.style.alignItems = 'center';

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the 'Add Task' button
    addButton.addEventListener('click', addTask);

    // Allow task addition with the Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
