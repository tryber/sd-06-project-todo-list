const inputText = document.getElementById("texto-tarefa");
const list = document.getElementById("lista-tarefas");
const btnCriar = document.getElementById("criar-tarefa");
const btnApagarTudo = document.getElementById("apaga-tudo");
const btnRemoveSelecionado = document.getElementById("remover-selecionado");
const btnRemoveFinalizados = document.getElementById("remover-finalizados");

btnCriar.addEventListener('click', function () {
  let elementoLista = document.createElement("li");
  list.appendChild(elementoLista);
  elementoLista.innerText = inputText.value;
  inputText.value = "";
})

list.addEventListener('click', function(event) {
  let li = event.target;
  for (let i = 0; i < list.childNodes.length; i += 1) {
    if(list.childNodes[i] !== li){
      list.childNodes[i].style.backgroundColor = 'white';
    }
  }
  if (li.style.backgroundColor === 'rgb(128, 128, 128)'){
    li.style.backgroundColor = 'white';
  } else {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

list.addEventListener('dblclick', function (event) {
  let li = event.target;
  if (li.style.textDecoration === 'line-through solid rgb(0, 0, 0)'){
    li.style.textDecoration = 'none';
    li.classList.remove('completed');
  } else {
    li.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    li.className += 'completed';
  }
});

btnApagarTudo.addEventListener('click', function () {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

btnRemoveSelecionado.addEventListener('click', function () {
  for (let i = 0; i < list.childNodes.length; i += 1) {
    if (list.childNodes[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      list.removeChild(list.childNodes[i]);
    }
  }
});

btnRemoveFinalizados.addEventListener('click', function () {
  for (let i = 0; i < list.childNodes.length;) {
    if (list.childNodes[i].classList.contains('completed')) {
      list.removeChild(list.childNodes[i]);
      i = 0;
    }
    else{
      i += 1;
    }
  }
});
