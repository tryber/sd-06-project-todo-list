const btnCreate = document.getElementById('criar-tarefa');
const btnErase = document.getElementById('apaga-tudo');
const btnEraseTask = document.getElementById('remover-finalizados')
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

btnCreate.addEventListener('click', function () {
  const li = document.createElement('li');
  li.innerHTML = text.value;
  list.appendChild(li);
  text.value = '';
  li.addEventListener('click', function () {
    for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
      document.querySelectorAll('li')[i].style.backgroundColor = 'white';
    }
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  li.addEventListener('dblclick', function () {
    if (li.className === '') {
      li.className = 'completed';
    } else {
      li.className = '';
    }
  });
});

btnErase.addEventListener('click', function () {
  list.innerHTML = '';
});

btnEraseTask.addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    if (document.querySelectorAll('li')[i].className === 'completed') {
      list.removeChild(document.querySelectorAll('li')[i]);
    }
  }
});
