window.onload = function () {
  const tarefa = document.querySelector('#texto-tarefa');
  const tarefaBtn = document.querySelector('#criar-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const listItens = document.getElementsByTagName('li');
  const removeBtn = document.querySelector('#apaga-tudo');
  tarefaBtn.addEventListener('click', function () {
    lista.innerHTML += '<li>' + tarefa.value + '</li>';
    tarefa.value = '';
  });
  tarefaBtn.addEventListener('click', function () {
    for (let i = 0; i < listItens.length; i += 1) {
      listItens[i].addEventListener('click', function () {
        for (let j = 0; j < listItens.length; j += 1) {
          if (listItens[j].classList.contains('selected') === true) {
            listItens[j].classList.remove('selected');
          }
        }
        listItens[i].classList.add('selected');
      });
      listItens[i].addEventListener('dblclick', function () {
        listItens[i].classList.toggle('completed');
      });
      removeBtn.addEventListener('click', function () {
        if (listItens[i] !== undefined) {
          listItens[i].parentNode.removeChild(listItens[i]);
        }
      });
    }
  });
};
