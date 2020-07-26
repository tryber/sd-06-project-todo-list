
function criarTarefa() {
  let criarButton = document.getElementById('criar-tarefa');
  criarButton.addEventListener('click', incluirTarefa);
}

function incluirTarefa() {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const textoContainer = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  if (textoTarefa !== '') {
    okAudio();
    li.innerText = textoTarefa;
    textoContainer.appendChild(li);
    document.querySelector('#texto-tarefa').value = '';
  } else {
    errorAudio();
    alert('Campo tarefa esta vazio');
  }

}

function excluirTarefa() {

}

function riscarTarefa() {

}

function fomatarTarefas() {

}

function okAudio() {
  document.getElementById('ok-audio').play();
}

function errorAudio() {
  document.getElementById('error-audio').play();
}


window.onload = () => {
  criarTarefa();
}

/**
 * Adicionar Tarefa
 * Selecionar Tarefa
 * Excluir Tarefa
 * Riscar Tarefa
 * Limpar lista de tarefas
 */
