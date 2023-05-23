const todoList = [];

const addTodo = text => {
    const todo = {
        text,
        id: Date.now(), 
        completed: false
    };

    todoList.push(todo);
    showTodo(todo);
};

const containerForm = document.querySelector('.container__form');
const inputTodo = document.querySelector('.container__form__input');
const buttonTasks = document.getElementById('tasks-button');

containerForm.addEventListener('submit', event => {
    event.preventDefault();

    const text = inputTodo.value.trim();

    if (text === '') {
        return
    }
    addTodo(text);
    inputTodo.value = ''
});

const tasksList = document.querySelector('.container__tasks-list');

const showTodo = todo => {
    const item = document.querySelector(`[data-key='${todo.id}']`);

    const isCompleted = todo.completed ? 'done' : '';
    const list = document.createElement('li');

    list.setAttribute('class', `container__tasks-list__done-task ${isCompleted}`);
    list.setAttribute('data-key', todo.id);

    list.innerHTML = `
    <input id="${todo.id}" type='checkbox' class='container__tasks-list__checked'/>
    <label for="${todo.id}" class="completed js-completed"></label>
    <span class='todo-text'>${todo.text}</span>
    <button class="container__tasks-list__edit">&#9998;</button>
    <button class="container__tasks-list__trash">&#10008;</button>
    `;

    if (item) {
        tasksList.replaceChild(list, item);
    } else {
        tasksList.appendChild(list);
    }
}

tasksList.addEventListener('click', event => {
    if (event.target.classList.contains('js-completed')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleCompleted(itemKey);
    }
});

const toggleCompleted = key => {
    const index = todoList.findIndex(item => item.id === Number(key));
    todoList[index].completed = !todoList[index].completed;
    showTodo(todoList[index]);
};