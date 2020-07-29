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
}

function readCreateItem (textCopied,list) {
  let itemCreated = document.createElement("LI");
  itemCreated.innerHTML = textCopied.value;
  list.appendChild(itemCreated);
  textCopied.value = '';
  initList();
  butaoApagaFinalizados.addEventListener('click',function () {
    removeFinalizados();
  });
}

textoDigitado = document.querySelector('#texto-tarefa');
listaTarefa = document.querySelector('#lista-tarefas');
butaoCriar = document.querySelector('#criar-tarefa');
butaoApaga = document.querySelector('#apaga-tudo');
butaoApagaFinalizados = document.querySelector('#remover-finalizados');

butaoCriar.addEventListener('click', function () {
  readCreateItem(textoDigitado,listaTarefa)
});

butaoApaga.addEventListener('click',function() {
  removeItems(listaTarefa)
});


