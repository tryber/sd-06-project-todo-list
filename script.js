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

function createListItem(button,textOrigin,action,list){
  button.addEventListener('click',function () {
    action(textOrigin,list);
  })

}

butao =$('#criar-tarefa');
textoDigitado = $('#texto-tarefa');
listaTarefa = $('#lista-tarefas');


createListItem(butao,textoDigitado,readCreateItem,listaTarefa);
