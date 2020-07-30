const listElements = document.getElementById('lista-tarefas');

function getInputValue() {
  const listBuilder = document.getElementById('lista-tarefas');
  const inputVal = document.getElementById('texto-tarefa');
  const listElement = document.createElement('li');
  listElement.innerText = inputVal.value;
  inputVal.value = '';
  listBuilder.appendChild(listElement);
}

listElements.addEventListener('click', function (event) {
  const oldSelectedElement = document.querySelector('.selected');
  const currentSelectedElement = event.target;
  if (oldSelectedElement) {
    if (currentSelectedElement === oldSelectedElement) {
      currentSelectedElement.classList.add('selected');
    } else {
      currentSelectedElement.classList.add('selected');
      oldSelectedElement.classList.remove('selected');
    }
  } else {
    currentSelectedElement.classList.add('selected');
  }
});

listElements.addEventListener('dblclick', function (event) {
  const currentSelectedElement = event.target;
  if (currentSelectedElement.className.includes('completed')) {
    currentSelectedElement.classList.remove('completed');
  } else {
    currentSelectedElement.classList.add('completed');
  }
});

function deleteTasks() {
  const listBuilder = document.getElementById('lista-tarefas');
  for (let index = listBuilder.children.length - 1; index >= 0; index -= 1) {
    listBuilder.removeChild(listBuilder.children[index]);
  }
}

function deleteCompleted() {
  const elements = document.querySelectorAll('.completed');
  for (let index = elements.length - 1; index >= 0; index -= 1) {
    elements[index].remove();
  }
}
