const enviarTexto = document.querySelector('#criar-tarefa');
const listarOrdenadamente = document.querySelector('#lista-tarefas');

enviarTexto.addEventListener('click', function (event) {
  event.preventDefault()
  const tarefaLi = document.createElement('li');
  const caixaTexto = document.querySelector('#texto-tarefa');
  tarefaLi.innerHTML = caixaTexto.value;
  listarOrdenadamente.appendChild(tarefaLi);
});
