const addTaskButton = document.querySelector('button:nth-of-type(1)');
const taskList = document.querySelector('ol');
const taskText = document.querySelector('input');

addTaskButton.addEventListener('click', function () {
  const li = document.createElement('li');
  
  li.innerText = taskText.value;
  taskText.value = '';
  taskList.appendChild(li);
})

