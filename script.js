function $(cssSelector){
  return document.querySelector(cssSelector);
}
function $a(tagOrClass) {
  return document.querySelectorAll(tagOrClass);
}

function $create(element){
  return document.createElement(element)
}


function readCreateItem(textCopied,list) {
  let itemCreated = $create("LI")
  itemCreated.innerHTML = textCopied.value
  list.appendChild(itemCreated);
  textCopied.value = '';
}

function removeItems(listaTarefa){
  while(listaTarefa.firstChild) {
    listaTarefa.removeChild(listaTarefa.firstChild);
  }
}



butaoCriar = $('#criar-tarefa');
textoDigitado = $('#texto-tarefa');
listaTarefa = $('#lista-tarefas');
butaoApaga = $('#apaga-tudo');




butaoCriar.addEventListener('click', function () {
  readCreateItem(textoDigitado,listaTarefa);
})

butaoApaga.addEventListener('click',function() {
  removeItems(listaTarefa);
})
