function okAudio() {
  document.getElementById('ok-audio').play();
}

function errorAudio() {
  document.getElementById('error-audio').play();
}

function completedTask() {
  const completedTask = this;
  const completedTaskClass = this.classList;
  for (let i = 0; i < completedTaskClass.length; i += 1) {
    if (completedTaskClass[i] === 'completed') {
      completedTask.classList.remove('completed');
      return;
    }
  }
  completedTask.classList.add('completed');
}

function selectedTask() {
  const otherTasks = document.querySelectorAll('.selected');
  for (let i = 0; i < otherTasks.length; i += 1) {
    const otherTask = otherTasks[i];
    otherTask.classList.remove('selected');
  }
  const thisSelectedTask = this;
  thisSelectedTask.classList.add('selected');
}

function incluirTarefa() {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const textoContainer = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  if (textoTarefa !== '') {
    okAudio();
    li.innerText = textoTarefa;
    li.addEventListener('click', selectedTask);
    li.addEventListener('dblclick', completedTask);
    textoContainer.appendChild(li);
    document.querySelector('#texto-tarefa').value = '';
  } else {
    errorAudio();
    alert('Campo tarefa esta vazio');
  }
}

function criarTarefa() {
  const criarButton = document.getElementById('criar-tarefa');
  criarButton.addEventListener('click', incluirTarefa);
  const addEnter = document.getElementById('texto-tarefa');
  addEnter.addEventListener('keypress', (keyDown) => {
    if (keyDown.key === 'Enter') {
      incluirTarefa();
    }
  });
}

function apagaTudo() {
  const taskContaneir = document.getElementById('lista-tarefas');
  while (taskContaneir.firstChild) {
    taskContaneir.removeChild(taskContaneir.lastChild);
  }
}

function apagaSelecionado() {
  const taskContaneir = document.getElementById('lista-tarefas');
  const selected = document.getElementsByClassName('selected')[0];
  taskContaneir.removeChild(selected);
}

function botaoApagarTudo() {
  const apagaTudoButton = document.getElementById('apaga-tudo');
  apagaTudoButton.addEventListener('click', apagaTudo);
}

function botaoExcluirTarefa() {
  const apagaTarefaButton = document.getElementById('remover-selecionado');
  apagaTarefaButton.addEventListener('click', apagaSelecionado);
}



window.onload = () => {
  criarTarefa();
  botaoApagarTudo();
  botaoExcluirTarefa();
}

/**
 * Adicionar Tarefa
 * Selecionar Tarefa
 * Excluir Tarefa
 * Riscar Tarefa
 * Limpar lista de tarefas
 */
