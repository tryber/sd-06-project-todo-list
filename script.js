window.onload = function () {
  // evento para criar lista
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', function () {
    const areaTexto = document.querySelector('#texto-tarefa').value;
    const tagli = document.createElement('li');
    tagli.innerHTML = areaTexto;
    document.querySelector('#lista-tarefas').appendChild(tagli);
  });
  // evento para limpar input
  button.addEventListener('click', function () {
    document.getElementById('texto-tarefa').value = '';
  });
  oneLineSelection();
  addItembackgroundColor();
  scratch();
  eraseAll();
};

function addItembackgroundColor() {
  const changeColor = document.querySelector('#lista-tarefas');
  changeColor.addEventListener('click', function (event) {
    const backgoundItem = event.target;
    backgoundItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
  });
}

function oneLineSelection() {
  const lineWhite = document.querySelector('#lista-tarefas');
  lineWhite.addEventListener('click', function () {
    const count = document.querySelector('#lista-tarefas').children;
    const color = document.getElementsByTagName('li');
    for (let index = 0; index < count.length; index += 1) {
      color[index].style.backgroundColor = 'white';
    }
  });
}

function scratch() {
  const eventSelect = document.querySelector('#lista-tarefas');
  eventSelect.addEventListener('dblclick', function (event) {
    const scratchItem = event.target;
    if (scratchItem.classList.contains('completed') === false) {
      scratchItem.classList.add('completed');
    } else {
      scratchItem.classList.remove('completed');
    }
  });
}

function eraseAll() {
  const eventSelect = document.querySelector('#apaga-tudo');
  eventSelect.addEventListener('click', function () {
    document.querySelector('#lista-tarefas').innerHTML = '';
  });
}
