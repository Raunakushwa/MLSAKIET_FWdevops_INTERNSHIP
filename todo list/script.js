document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();  

    if (taskText) {
       
        const li = document.createElement('li');
        
        
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);
        
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        
        
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        
        
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});
