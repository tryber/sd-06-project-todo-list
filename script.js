window.onload = function () {

  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  const botaoApagarTudo = document.getElementById('apaga-tudo');

  botaoCriarTarefa.addEventListener('click', addTask);
  botaoApagarTudo.addEventListener('click', removeTask);
}
//adiciona tarefa
addTask = () => {
  const ol = document.getElementById('lista-tarefas');
  event.preventDefault();
  if (document.getElementById('texto-tarefa').value != '') {
    const item = document.getElementById('texto-tarefa');
    const li = createItemEl(item.value);
    ol.appendChild(li);
    item.value = '';
  }
}

createItemEl = (itemValue) => {
  const li = document.createElement('li');
  li.className = ('task');
  li.appendChild(document.createTextNode(itemValue));
  return li;
}

//apaga todas as tarefas
removeTask = () => {
  if (document.getElementById('lista-tarefas').innerHTML.value != ''){    
    document.querySelectorAll('.task').forEach(e => e.remove());
  }
}

//marca 1 elemento
const taskGray = document.querySelector('#lista-tarefas');
taskGray.addEventListener('click', function (event) {
  const oldSelected = document.querySelector('.selected');
  const selected = event.target;
  if (oldSelected) {
    oldSelected.classList.remove('selected');
    selected.classList.add('selected');
  } else {
    selected.classList.add('selected');
  }
});
