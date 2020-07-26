const addTaskButton = document.querySelector('button:nth-of-type(1)');
const taskList = document.querySelector('ol');
const taskText = document.querySelector('input');
let tasks = [];

addTaskButton.addEventListener('click', function () {
  const li = document.createElement('li');

  li.innerText = taskText.value;

  li.addEventListener('click', function (event) {
    event.path[0].className = 'selected';
  })

  taskText.value = '';
  taskList.appendChild(li);
  tasks.push(li);
})

