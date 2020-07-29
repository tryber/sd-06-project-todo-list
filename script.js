function readCreateItem (textCopied,list) {
  let itemCreated = document.createElement("LI");
  itemCreated.innerHTML = textCopied.value;
  list.appendChild(itemCreated);
  textCopied.value = '';
  initList();
}

function changeBackground (event) {
  selectedItem = event.currentTarget;
  selectedItem.style.backgroundColor = `rgb(128, 128, 128)`;
  children = selectedItem.parentNode.children;
  for (let i = 0; i < filhos.length; i += 1){
    if (children[i] !== selectedItem) {
      children[i].style.backgroundColor = `rgb(255, 255, 255)`;
    }
  }
}

function removeItems (listaTarefa) {
  while(listaTarefa.firstChild) {
    listaTarefa.removeChild(listaTarefa.firstChild);
  }
}

function initList () {
  selectedItem = document.querySelector('#lista-tarefas').lastChild;
  selectedItem.addEventListener('click',function (event) {
    changeBackground(event)
  });



}

butaoCriar = document.querySelector('#criar-tarefa');
textoDigitado = document.querySelector('#texto-tarefa');
listaTarefa = document.querySelector('#lista-tarefas');
butaoApaga = document.querySelector('#apaga-tudo');

butaoCriar.addEventListener('click', function () {
  readCreateItem(textoDigitado,listaTarefa)
});

butaoApaga.addEventListener('click',function() {
  removeItems(listaTarefa)
});


