const addTaskButton = document.querySelector('button:nth-of-type(1)');
const taskList = document.querySelector('ol');
const taskText = document.querySelector('input');
let currentLi;
const tasks = [];

function addClickListener() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', function (event) {
      if (!currentLi) {
        event.target.className = 'selected';
        currentLi = tasks[i];
      } else {
        currentLi.classList.remove('selected');
        currentLi = event.target;
        currentLi.className = 'selected';
      }
    })
  }
}

function addDoubleClickListener() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('dblclick', function (event) {
      const li = event.target;
      const classNames = [];

      for (let i = 0; i < event.target.classList.length; i++) {
        classNames.push(event.target.classList[i]);
      }

      if (!classNames.includes('completed')) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    })
  }
}

addTaskButton.addEventListener('click', function () {
  const li = document.createElement('li');

  li.innerText = taskText.value;
  taskText.value = '';
  taskList.appendChild(li);
  tasks.push(li);

  addClickListener();
  addDoubleClickListener();
})
