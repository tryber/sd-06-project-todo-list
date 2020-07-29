const tarefa = document.getElementById('texto-tarefa');
const adicionar = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const deletarTudo = document.getElementById('apaga-tudo');
const deletarFinalizados = document.getElementById('remover-finalizados');
const deletarSelecionado =document.getElementById('remover-selecionado');

adicionar.addEventListener('click', () => {
  const elemento = document.createElement('li');
  elemento.innerHTML = tarefa.value;
  lista.appendChild(elemento);
  tarefa.value = '';
  const itemLista = document.querySelectorAll('li');
  itemLista.forEach((item) => {
    item.addEventListener('click', () => {
      itemLista.forEach((item) => {
        item.classList.remove('selected');
      });
      item.classList.add('selected');
    });
  });
});

lista.addEventListener('dblclick', (e) => {
  const completed = e.target;
  if (!completed.classList.contains('completed')) {
    completed.className = 'completed';
  } else {
    completed.classList -= 'completed';
  }
});

deletarTudo.addEventListener('click', function () {
  const itemLista = document.querySelectorAll('li');
  itemLista.forEach((item) => {
    lista.removeChild(item);
  });
});

deletarFinalizados.addEventListener('click', function () {
  const itemLista = document.querySelectorAll('li');
  itemLista.forEach((item) => {
    if(item.classList.contains('completed')) {
      lista.removeChild(item);
    }
  });
});

deletarSelecionado.addEventListener('click', function () {
  const itemLista = document.querySelectorAll('li');
  itemLista.forEach((item) => {
    if(item.classList.contains('selected')) {
      lista.removeChild(item);
    }
  });
});