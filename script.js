const btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

btn.addEventListener('click', function () {
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
});
