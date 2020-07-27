const addTaskButton = document.querySelector('button:nth-of-type(1)');
const taskList = document.querySelector('ol');
const taskText = document.querySelector('input');
let currentLi;

addTaskButton.addEventListener('click', function () {
  const li = document.createElement('li');

  li.innerText = taskText.value;

  li.addEventListener('click', function (event) {
    if (!currentLi) {
      event.path[0].className = 'selected';
      currentLi = li;
    } else {
      currentLi.classList.remove('selected');
      currentLi = event.path[0];
      currentLi.className = 'selected';
    }
  })

  taskText.value = '';
  taskList.appendChild(li);
})

