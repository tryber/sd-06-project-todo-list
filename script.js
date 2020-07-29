let tasksList = document.querySelector('#tasks ol');

function itemClickBg(event) {
  let listItems = document.querySelectorAll('#tasks ol li');
  for (const i of listItems) {
    if (i.classList.contains('selected')) {
      i.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function itemCompleted(event) {
  if(event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');  
  } else {
    event.target.classList.add('completed');
  }
}

function createItem() {
  let createItemElement = document.createElement('li');
  let itemTxt = document.querySelector('#texto-tarefa').value;
  createItemElement.innerText = itemTxt;
  tasksList.appendChild(createItemElement);
  createItemElement.addEventListener('click', itemClickBg);
  createItemElement.addEventListener('dblclick', itemCompleted);
  document.querySelector('#texto-tarefa').value = '';
}

let createItemBtn = document.querySelector('#criar-tarefa');
createItemBtn.addEventListener('click', createItem);

function eraseAll(event) {
  let tasks = document.querySelector('#tasks ol').children;
  if (tasks.length) {
    alert('Certeza que quer apagar tudo?');
    for (let task = tasks.length - 1; task >= 0; task -= 1) {
      tasksList.removeChild(tasks[task]);
    }
  }
}

let eraseAllBtn = document.querySelector('#apaga-tudo');
eraseAllBtn.addEventListener('click', eraseAll);

function eraseCompleted(event) {
  let tasks = document.querySelector('#tasks ol').children;
  if (tasks.length) {
    alert('Certeza que quer apagar as tarefas completadas?');
    for (let task = tasks.length - 1; task >= 0; task -= 1) {
      if(tasks[task].classList.contains('completed')) {
        tasksList.removeChild(tasks[task]);
      }
    }
  }
}

let eraseCompletedBtn = document.querySelector('#remover-finalizados');
eraseCompletedBtn.addEventListener('click', eraseCompleted);