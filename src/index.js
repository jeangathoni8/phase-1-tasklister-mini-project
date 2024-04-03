document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const task = document.getElementById('new-task-description');
      const taskList = document.getElementById('tasks');
      const newTask = document.createElement('li');
      newTask.innerText = task.value;
      taskList.appendChild(newTask);
      task.value = '';
    });
  } else {
    console.log('form not found');
  }
});

function deleteTask(e){
  e.target.parentNode.remove();
}

// Adds a click listener to each task in the list that will remove it when clicked.
const tasks = document.getElementsByTagName('li');
for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  task.addEventListener('click', deleteTask);
}

