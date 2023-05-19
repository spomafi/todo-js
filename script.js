const inputTask = document.getElementById('tasks-input');
const listTasks = document.querySelector('.container__tasks-list');
const buttonTasks = document.getElementById('tasks-button');


buttonTasks.addEventListener('click', () => {
    if(inputTask.value === '') {
        return null
    } else {
        let liInput = document.createElement('li');
        liInput.innerHTML = inputTask.value;
        listTasks.appendChild(liInput);
    }

    inputTask.value = '';
})

inputTask.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        buttonTasks.click()
    }
})