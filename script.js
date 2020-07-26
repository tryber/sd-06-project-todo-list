// imput do texto
let textoTarefa = document.getElementById('texto-tarefa');
// lista ordenada 
let listaTarefas = document.getElementById('lista-tarefas');
// botao ao lado do imput
let criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', function () {
  let li = document.createElement('li');
  li.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(li);
  textoTarefa.value = '';
});
