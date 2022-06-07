// Задание 3. Форма обратной связи
// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.
// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onUpdateInput, 500));
formRef.addEventListener('submit', formSubmit);

try {
   let onTextInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
   formRef.elements.email.value = onTextInput.email;
   formRef.elements.message.value = onTextInput.message;
} catch (e) {
   console.log(e);
}

function onUpdateInput(e) {   
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(createStatusInput()));
}

function createStatusInput() {
  return {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
}

function formSubmit(e) {
   e.preventDefault();
   console.log(createStatusInput());
   formRef.reset();
   localStorage.removeItem(LOCALSTORAGE_KEY);
}