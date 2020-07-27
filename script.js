const enviarTexto = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');

enviarTexto.addEventListener('click', function (event) {
  event.preventDefault();

  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = textoTarefa.value;
  listaTarefa.appendChild(novaTarefa);

  novaTarefa.addEventListener('click', function () {
    novaTarefa.classList.toggle('selected');
  });
  novaTarefa.addEventListener('dblclick', function () {
    novaTarefa.classList.toggle('completed');
  });

  textoTarefa.value = '';
});

