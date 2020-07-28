function readCreateItem(textCopied,list) {
  let itemCreated = document.createElement("LI");
  itemCreated.innerHTML = textCopied.value
  list.appendChild(itemCreated);
  textCopied.value = '';
}

function removeItems(listaTarefa){
  while(listaTarefa.firstChild) {
    listaTarefa.removeChild(listaTarefa.firstChild);
  }
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
