const taskInput = document.getElementById('task-input');
const DateInput = document.getElementById('date-input');
const addButton = document.getElementById('add-button');
const alertMessage = document.getElementById('alert-message');

const todos = JSON.parse(localStorage.getItem('todos'));
console.log(todos);

const generateId = () => {
  return (id = Math.round(
    Math.random() * Math.random() * Math.pow(7, 8)
  ).toString());
};

const showAlert = (message, type) => {
  alertMessage.innerHTML = '';
  const alert = document.createElement('p');
  alert.innerText = message;
  alert.classList.add('alert');
  alert.classList.add(`alert-${type}`);
  alertMessage.append(alert);

  setTimeout(() => {
    alert.style.display = 'none';
  }, 2000);
};

const saveToLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const addHandler = () => {
  const task = taskInput.value;
  const date = DateInput.value;
  const todo = {
    id: generateId(),
    completed: false,
    task,
    date,
  };

  if (task) {
    todos.push(todo);
    saveToLocalStorage();
    taskInput.value = '';
    DateInput.value = '';
    console.log(todos);
    showAlert('Todo added to the list!', 'success');
  } else {
    showAlert('Please Enter a Todo!', 'error');
  }
};
generateId();
addButton.addEventListener('click', addHandler);
