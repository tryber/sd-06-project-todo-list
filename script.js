// declarando as variaveis e botoes:
const textoInput = document.getElementById('texto-tarefa');
const botaoCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');
const botaoPraCima = document.getElementById('mover-cima');
const botaoPraBaixo = document.getElementById('mover-baixo');

// criando o item li:
// esta função adiciona o itemLi como filho da lista de tarefas
// e limpa a entrada de texto
function criaItem() {
  const itemLi = document.createElement('li');
  itemLi.innerHTML = textoInput.value;
  listaTarefas.appendChild(itemLi);
  textoInput.value = '';
  itemLi.style.cursor = 'pointer';
  textoInput.focus(); // faz o cursor ficar piscando no input
}

// evento que cria tarefa
botaoCriarTarefa.addEventListener('click', criaItem);

// função que atribui a classe selected para o item clicado
function atribuiSelected(evento) {
  const item = evento.target;
  const todasTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].classList.contains('selected')) {
      todasTarefas[i].classList.remove('selected');
    }
  }
  item.classList.add('selected');
}

// evento que dá a classe selected para o item da lista
listaTarefas.addEventListener('click', atribuiSelected);

// função que risca o item
function riscaItem(evento) {
  const item = evento.target;
  item.classList.toggle('completed');
}

// evento que risca o item
listaTarefas.addEventListener('dblclick', riscaItem);

// função que remove todos os itens da lista
function apagaTudo() {
  const todasTarefas = document.getElementById('lista-tarefas');
  while (todasTarefas.firstChild) {
    todasTarefas.firstChild.remove();
  }
}

// evento que apaga todos os itens da lista
botaoApagaTudo.addEventListener('click', apagaTudo);

// função que remove todos os itens com com classe completed
function removeFinalizados() {
  const todasTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].classList.contains('completed')) {
      todasTarefas[i].remove();
    }
  }
}

// evento que remove todos os itens com com classe completed
botaoRemoverFinalizados.addEventListener('click', removeFinalizados);

// função que remove somente o item selecionado
function removeSelecionado() {
  const todasTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].classList.contains('selected')) {
      todasTarefas[i].remove();
    }
  }
}

// evento que remove somente o item selecionado
botaoRemoverSelecionado.addEventListener('click', removeSelecionado);

// função para salvar as tarefas no local storage
function salvaTarefas() {
  const todasTarefas = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('todas as tarefas', todasTarefas);
}

// evento para salvar as tarefas no local storage
botaoSalvarTarefas.addEventListener('click', salvaTarefas);

// função que recupera os itens salvos no local storage
function recuperaTarefas() {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('todas as tarefas');
}

// ao carregar a página os itens salvos no local storage aparecerão
window.onload = recuperaTarefas;

// criando uma função que verifica a quantidade de itens com classe selected
let quantSelecionados = 0;
function verificaSelecionados() {
  quantSelecionados = 0;
  const todasTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].classList.contains('selected')) {
      quantSelecionados += 1;
    }
  }
}

// função que move um item selecionado para cima, usando a verificação da função
// criada acima (verificaSelecionados)
function moveAcima() {
  verificaSelecionados();
  if (quantSelecionados !== 1) {
    alert('Selecione um item para mover');
  } else {
    const itemSelecionado = document.getElementsByClassName('selected')[0];
    if (itemSelecionado.previousElementSibling !== null) {
      const itemAcima = itemSelecionado.previousElementSibling;
      const textoItemAcima = itemAcima.innerHTML;
      itemAcima.innerHTML = itemSelecionado.innerHTML;
      itemSelecionado.innerHTML = textoItemAcima;
      itemSelecionado.classList.remove('selected');
      itemAcima.classList.add('selected');
    }
  }
}

// evento que move um item selecionado para cima
botaoPraCima.addEventListener('click', moveAcima);

// função que move um item selecionado para baixo, usando a verificação da função
// criada acima (verificaSelecionados)
function moveAbaixo() {
  verificaSelecionados();
  if (quantSelecionados !== 1) {
    alert('Selecione um item para mover');
  } else {
    const itemSelecionado = document.getElementsByClassName('selected')[0];
    if (itemSelecionado.nextElementSibling !== null) {
      const itemAbaixo = itemSelecionado.nextElementSibling;
      const textoItemAbaixo = itemAbaixo.innerHTML;
      itemAbaixo.innerHTML = itemSelecionado.innerHTML;
      itemSelecionado.innerHTML = textoItemAbaixo;
      itemSelecionado.classList.remove('selected');
      itemAbaixo.classList.add('selected');
    }
  }
}

// evento que move um item selecionado para baixo
botaoPraBaixo.addEventListener('click', moveAbaixo);
