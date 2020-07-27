const btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

btn.addEventListener('click', function() {
  let li = document.createElement('li');
  li.innerHTML = text.value;
  list.appendChild(li);
  text.value = '';
  li.addEventListener('click', function() {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  });
});
