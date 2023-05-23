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
    const isCompleted = todo.completed ? 'done' : '';
    const list = document.createElement('li');

    list.setAttribute('class', `todo-item ${isCompleted}`);
    list.setAttribute('data-key', todo.id);

    list.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    `;

    tasksList.appendChild(list);
}