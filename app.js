const input = document.getElementById('enter-task');
const btn = document.querySelector('button');
const listTask = document.getElementById('list-task');

function addTask() {
    
    const taskValue = input.value.trim();
    
    if (taskValue) {
        let newTask = document.createElement('div');
        newTask.classList.add('task');

        let text = document.createElement('p');
        text.innerText = taskValue;
        newTask.appendChild(text);

        let icons = document.createElement('div');
        icons.classList.add('icons');
        newTask.appendChild(icons);

        let complete = document.createElement('i');
        complete.classList.add('bi', 'bi-check-circle-fill', 'icon-complete')
        complete.addEventListener('click', completeTask);
        
        let erase = document.createElement('i');
        erase.classList.add('bi', 'bi-trash3-fill', 'icon-delete');
        erase.addEventListener('click', deleteTask);

        icons.append(complete, erase);

        listTask.appendChild(newTask);

        input.value= '';

    } 
    else {
        alert('Ingrese una tarea');
    }
}

function completeTask(e) {
    let task = e.target.parentNode.parentNode;
    task.classList.toggle('complete');
}

function deleteTask(e) {
    let task = e.target.parentNode.parentNode;
    task.remove();
}

btn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});