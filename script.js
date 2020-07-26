const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');

criarTarefa.addEventListener('click', function () {
  const li = document.createElement('li');
  li.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(li);
  li.addEventListener('click', function () {
    const liSelecionado = document.getElementsByClassName('itemSelecionado');
    if (liSelecionado.length > 0) {
      liSelecionado[0].classList.remove('itemSelecionado');
    }
    li.classList.add('itemSelecionado');
  });
  textoTarefa.value = '';
});


// 1) Será verificado que, ao se clicar em um item da lista, 
// ele passa a ter o estilo CSS `background-color: rgb(128, 128, 128)`