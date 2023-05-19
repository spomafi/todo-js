const inputTask = document.getElementById('tasks-input');
const listTasks = document.querySelector('.container__tasks-list');
const buttonTasks = document.getElementById('tasks-button');


buttonTasks.addEventListener('click', () => {
    if(inputTask.value === '') {
        return
    } else {
        let liInput = document.createElement('li');
        liInput.classList.add('container__tasks-list__done-task')
        liInput.innerHTML = inputTask.value;
        listTasks.appendChild(liInput);

        let spanDelete = document.createElement('span');
        spanDelete.classList.add('container__tasks-list__trash')
        spanDelete.innerHTML = '&#10008;';
        liInput.appendChild(spanDelete);

        let pencilEdit =  document.createElement('span');
        pencilEdit.classList.add('container__tasks-list__edit')
        pencilEdit.innerHTML = '&#9998;';
        liInput.appendChild(pencilEdit);
    }

    inputTask.value = '';
})

inputTask.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        buttonTasks.click()
    }
})