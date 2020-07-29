function changeBackground (event) {
  selectedItem = event.currentTarget;
  selectedItem.style.backgroundColor = `rgb(128, 128, 128)`;
  children = selectedItem.parentNode.children;
  for (let i = 0; i < children.length; i += 1) {
    if (children[i] !== selectedItem) {
      children[i].style.backgroundColor = ``;
    }
  }
}

function removeFinalizados () {
  finalizados = document.querySelectorAll('.completed');
  for (let i = 0; i < finalizados.length; i += 1) {
    finalizados[i].remove();
  }
}

function removeItems (listaTarefa) {
  while(listaTarefa.firstChild) {
    listaTarefa.removeChild(listaTarefa.firstChild);
  }
}

function itemDone(event) {
  const item = event.currentTarget;
  console.log(item);
  if (item.className === `completed`) {
    item.classList.remove('completed');
  } else {
    item.classList = `completed`;
  }
}

function initList () {
  selectedItem = document.querySelector('#lista-tarefas').lastChild;

  selectedItem.addEventListener('click', function (e) {
    changeBackground(e);
  });
  selectedItem.addEventListener('dblclick', function (e) {
    itemDone(e);
  });
  butaoApagaFinalizados.addEventListener('click',function () {
    removeFinalizados();
  });
}

function readCreateItem (textCopied,list) {
  let itemCreated = document.createElement("LI");
  itemCreated.innerHTML = textCopied.value;
  list.appendChild(itemCreated);
  textCopied.value = '';
  initList();
}

function SaveTasks () {
  let tasks = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < tasks.length; i += 1 ) {
    localStorage.setItem(`content ${i}`, tasks[i].innerHTML );
    localStorage.setItem(`class ${i}`, tasks[i].classList);
    localStorage.setItem(`style ${i}`, tasks[i].style.backgroundColor);
  }
  localStorage.setItem(`length`, tasks.length);
}

function loadTasks () {
  if (localStorage.getItem(`length`) > 0) {
    let length = localStorage.getItem(`length`);
    for(let i = 0; i < length; i += 1){
      const tasks = localStorage.getItem(`content ${i}`);
      let itemCreated = document.createElement("LI");
      itemCreated.classList = localStorage.getItem(`class ${i}`)
      itemCreated.style.backgroundColor = localStorage.getItem(`style ${i}`);
      itemCreated.append(tasks);
      const list = document.querySelector('#lista-tarefas');
      list.appendChild(itemCreated); //
      initList();
    }
  }
}

textoDigitado = document.querySelector('#texto-tarefa');
listaTarefa = document.querySelector('#lista-tarefas');
butaoCriar = document.querySelector('#criar-tarefa');
butaoApaga = document.querySelector('#apaga-tudo');
butaoApagaFinalizados = document.querySelector('#remover-finalizados');
butaoSalvarTarefa = document.querySelector('#salvar-tarefa');

butaoCriar.addEventListener('click', function () {
  readCreateItem(textoDigitado,listaTarefa)
});

butaoApaga.addEventListener('click',function() {
  removeItems(listaTarefa);
});

butaoSalvarTarefa.addEventListener('click', function () {
  SaveTasks();
});

loadTasks();


