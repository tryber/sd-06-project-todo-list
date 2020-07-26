window.onload = () => {
    
  criarTarefa();
}

function criarTarefa() {
  let criarButton = document.getElementById('criar-tarefa');
  criarButton.addEventListener('click', incluirTarefa);
}

function incluirTarefa() {
  let textoTarefa = document.getElementById('texto-tarefa').value;
  let textoContainer = document.getElementById('lista-tarefas');
  let li = document.createElement('li');
  if(textoTarefa != '') {
    li.innerText = textoTarefa;
    textoContainer.appendChild(li);
  } else {
    alert('Campo tarefa esta vazio')
  }
        


}

function excluirTarefa() {

}

function riscarTarefa() {

}

function fomatarTarefas() {

}

/**
 * Adicionar Tarefa
 * Selecionar Tarefa
 * Excluir Tarefa
 * Riscar Tarefa
 * Limpar lista de tarefas
 * 
 */