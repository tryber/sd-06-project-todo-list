function changeBackground (event) {
  selectedItem = event.currentTarget;
  selectedItem.classList.add(`selected`);
  children = selectedItem.parentNode.children;
  for (let i = 0; i < children.length; i += 1) {
    if (children[i] !== selectedItem) {
      children[i].classList.remove('selected');
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

function moveUp (event) {
  const items = document.querySelector('#lista-tarefas').children;
  let selected = document.querySelector('.selected');

  let anterior;


  for (let i = 0 ; i < items.length ; i += 1) {
    if (items[i] === selected && i > 0) {
      anterior = items[i - 1];
      event.stopImmediatePropagation();

    }
  }
  if(anterior !== undefined) {
    anterior.classList = selected.classList;
    selected.classList.remove('selected');
    let copytext = anterior.innerHTML;
    anterior.innerHTML = selected.innerHTML;
    selected.innerHTML = copytext;
  }
}

function moveDown (event) {
  const items = document.querySelector('#lista-tarefas').children;
  let selected = document.querySelector('.selected');

  let proximo;


  for (let i = items.length ; i > 0  ; i -= 1) {
    if (items[i] === selected && i > 0) {
      proximo = items[i + 1];
      event.stopImmediatePropagation();

    }
  }
  if(proximo !== undefined) {
    proximo.classList = selected.classList;
    selected.classList.remove('selected');
    let copytext = proximo.innerHTML;
    proximo.innerHTML = selected.innerHTML;
    selected.innerHTML = copytext;
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

  butaoCima.addEventListener('click',function (e) {
    moveUp(e);
  })

  butaoBaixo.addEventListener('click', function (e) {
    moveDown(e);
  })
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
butaoCima = document.querySelector('#mover-cima');
butaoBaixo = document.querySelector('#mover-baixo');

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


