window.onload = function () {
  const botao = document.querySelector('#criar-tarefa');
  botao.addEventListener('click', function () {
    const areaTexto = document.querySelector('#texto-tarefa').value;
    const tagli = document.createElement('li');
    tagli.innerHTML = areaTexto;
    document.querySelector('#lista-tarefas').appendChild(tagli);
    document.getElementById('texto-tarefa').value = ' ';
  });
};
