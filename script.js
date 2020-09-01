// Variáveis globais
const listaTarefas = document.getElementById('lista-tarefas');
let selecao;

// carregar itens salvos
window.onload = () => {
  for (let j = 0; j < localStorage.length/2; j += 1) {
    const carregarLista = document.createElement('li');
    carregarLista.innerHTML = localStorage.getItem(j);
    carregarLista.className = localStorage.getItem(localStorage[j]);
    listaTarefas.appendChild(carregarLista);
  }
}

// configuração do botão
const criar = document.getElementById('criar-tarefa');
criar.addEventListener('click', () => {

  // Adicionando as "LI"
  const texto = document.getElementById('texto-tarefa');
  let novaTarefa = texto.value;
  texto.value = '';
  const lista = document.createElement("li");
  const textlista = document.createTextNode(novaTarefa);
  lista.appendChild(textlista);
  listaTarefas.appendChild(lista);

  // seleção cinza
  document.querySelectorAll('li').forEach( (item) => {
    item.addEventListener('click', event => {
      document.querySelectorAll('li').forEach(element => { element.classList.remove('selected')});
      item.classList.add('selected');
      selecao = item.classList.value; // setando variável para seleção riscado
    });
  });

  // seleção riscado
  document.querySelectorAll('li').forEach(comp => {
    comp.addEventListener('dblclick', () => {
      if (selecao =='selected') {
      comp.classList.add('completed');
      } else {
      comp.classList.remove('completed');
       }
    });
  });
});

// limpar a lista
const clear = document.getElementById('apaga-tudo');
clear.addEventListener('click', () => {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
    localStorage.clear();
  };
});

// limpar completos
const rmvFinalizados = document.getElementById('remover-finalizados');
rmvFinalizados.addEventListener('click', () => {
  let rmvFin = document.querySelectorAll('.completed');
  for (let i = 0; i < rmvFin.length; i += 1 ) {
    listaTarefas.removeChild(rmvFin[i]);
  };
});

// limpar selecionado
const rmvSelecionado = document.getElementById('remover-selecionado');
rmvSelecionado.addEventListener('click', () => {
  let rmvSel = document.querySelectorAll('.selected');
  listaTarefas.removeChild(rmvSel[0]);
});

// Salvar as tarefas para reabrir a página
const salvarTarefas = document.getElementById('salvar-tarefas');
salvarTarefas.addEventListener('click', () => {
  const listaLi = document.getElementsByTagName('li');
  if (localStorage != null) {
    localStorage.clear();
  };
  for ( let i =0; i < listaLi.length; i += 1) {
  localStorage.setItem(i , listaLi[i].innerHTML);
  localStorage.setItem(listaLi[i].innerHTML , listaLi[i].className);
  console.log(listaLi[i]);
  };
});
