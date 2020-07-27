const inputText = document.getElementById("texto-tarefa");
const list = document.getElementById("lista-tarefas");
const btnCriar = document.getElementById("criar-tarefa");
const btnApagar = document.getElementById("apaga-tudo");

btnCriar.addEventListener('click', function () {
  let elementoLista = document.createElement("li");
  list.appendChild(elementoLista);
  elementoLista.innerText = inputText.value;
  inputText.value = "";
})

list.addEventListener('click', function(event) {
  let li = event.target;
  if (li.style.backgroundColor === 'rgb(128, 128, 128)'){
    li.style.backgroundColor = 'white';
  } else {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

list.addEventListener('dblclick', function (event) {
  let li = event.target;
  if (li.style.textDecoration === 'line-through'){
    li.style.textDecoration = 'none';
  } else {
    li.style.textDecoration = 'line-through';
  }
});

btnApagar.addEventListener('click', function () {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

