const addTaskButton = document.querySelector('button:nth-of-type(1)');
const taskList = document.querySelector('ol');
const taskText = document.querySelector('input');
const clearAllButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');

function addClickListener(newElement) {
  newElement.addEventListener('click', function (event) {
    const previouslySelected = document.querySelector(".selected");
    const currentSelected = event.target;

    if (previouslySelected) {
      previouslySelected.classList.remove("selected");
    }

    currentSelected.classList.add("selected");
  })
}

function addDoubleClickListener(newElement) {
  newElement.addEventListener('dblclick', function (event) {
    const clicked = event.target;

    if (clicked.classList.contains('completed')) {
      clicked.classList.remove('completed');
    } else {
      clicked.classList.add('completed');
    }
  })
}

addTaskButton.addEventListener('click', function () {
  const li = document.createElement('li');
  li.innerText = taskText.value;
  taskText.value = '';
  taskList.appendChild(li);

  addClickListener(taskList.lastChild);
  addDoubleClickListener(taskList.lastChild);
})

clearAllButton.addEventListener('click', function () {
  taskList.innerHTML = [];
})

clearCompletedButton.addEventListener('click', function () {
  const selectedItems = document.querySelectorAll('.completed');

  selectedItems.forEach(li => {
    if (li.classList.contains('completed')) {
      taskList.removeChild(li);
    }
  });
})

