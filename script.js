const tasksList = document.querySelector('#tasks ol');

function itemClickBg(event) {
  const listItems = document.querySelectorAll('#tasks ol li');
  for (const i of listItems) {
    if (i.classList.contains('selected')) {
      i.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function itemCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function createItem() {
  const createItemElement = document.createElement('li');
  const itemTxt = document.querySelector('#texto-tarefa').value;
  createItemElement.innerText = itemTxt;
  tasksList.appendChild(createItemElement);
  createItemElement.addEventListener('click', itemClickBg);
  createItemElement.addEventListener('dblclick', itemCompleted);
  document.querySelector('#texto-tarefa').value = '';
}

const createItemBtn = document.querySelector('#criar-tarefa');
createItemBtn.addEventListener('click', createItem);

function eraseAll(event) {
  let tasks = document.querySelector('#tasks ol').children;
  if (tasks.length) {
    alert('Apagar tudo?');
    for (let task = tasks.length - 1; task >= 0; task -= 1) {
      tasksList.removeChild(tasks[task]);
    }
  }
}

const eraseAllBtn = document.querySelector('#apaga-tudo');
eraseAllBtn.addEventListener('click', eraseAll);

function eraseCompleted(event) {
  let tasks = document.querySelector('#tasks ol').children;
  if (tasks.length) {
    alert('Apagar as tarefas completadas?');
    for (let task = tasks.length - 1; task >= 0; task -= 1) {
      if(tasks[task].classList.contains('completed')) {
        tasksList.removeChild(tasks[task]);
      }
    }
  }
}

const eraseCompletedBtn = document.querySelector('#remover-finalizados');
eraseCompletedBtn.addEventListener('click', eraseCompleted);

function eraseSelected(event) {
  let tasks = document.querySelector('#tasks ol').children;
  if (tasks.length) {
    for (let task = tasks.length - 1; task >= 0; task -= 1) {
      if(tasks[task].classList.contains('selected')) {
        alert('Remover tarefa selecionada?');
        tasksList.removeChild(tasks[task]);
        break;
      }
    }
  }
}

const eraseSelectedBtn = document.querySelector('#remover-selecionado');
eraseSelectedBtn.addEventListener('click', eraseSelected);
