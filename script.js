//  Criando as variaveis do html
const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const itemlistaTarefas = document.getElementById('lista-tarefas');
//  Função para quando digitar uma tarefa ela ser adciona a lista clicando no botão indicado
function listarItens() {
  const itemLista = document.createElement('li');
  itemLista.innerHTML = textoTarefa.value;
  itemlistaTarefas.appendChild(itemLista);
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', listarItens);

//  Função para Ao clicar em um item da lista, altere a cor de fundo do item para cinza
function alterarCorDoItemParaCinza(event) {
  event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

itemlistaTarefas.addEventListener('click', alterarCorDoItemParaCinza);
